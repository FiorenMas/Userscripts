#!/bin/bash

# Install Terser
npm install terser -g
# Make directories
mkdir download pr-js meta js release

# Download userscripts
while read -r line; do
  if [[ $line == \#* ]]; then
    urls=($(echo "$line" | grep -o 'https://[^ )]*'))
    if [[ ${#urls[@]} -ge 2 ]]; then
      url=${urls[1]}
      file=$(basename "$url")
      file=$(echo "$file" | tr -cd '[:alnum:].')
      if [[ -f "download/$file" ]]; then
        suffix="A"
        while [[ -f "download/$suffix$file" ]]; do
          suffix=$(echo "$suffix" | tr "0-9A-Z" "1-9A-Z_")
        done
        file="$suffix$file"
      fi
      wget -q -U "User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/119.0" "$url" -O "download/$file"
      sed -i "s|$url|https://raw.githubusercontent.com/$repository/release/release/$file|g" List
    fi
  fi
done < List

# Split userscript to meta file and js file
for file in download/*.user.js; do
  base=$(basename "$file" .user.js)
  sed -n '/\/\/ ==UserScript==/,/\/\/ ==\/UserScript==/p' "$file" > "meta/$base.meta.js"
  sed -n '/\/\/ ==\/UserScript==/,$p' "$file" | tail -n +2 > "pr-js/$base.js"
done

# Switch @downloadURL and @updateURL to our repository
for file in meta/*.meta.js; do
  base=$(basename "$file" .meta.js)
  sed -i "s|// @downloadURL .*|// @downloadURL https://raw.githubusercontent.com/$repository/release/release/$base.user.js|" "$file"
  sed -i "s|// @updateURL .*|// @updateURL https://raw.githubusercontent.com/$repository/release/release/$base.meta.js|" "$file"
done

# Parallel compile js files
function compile_js() {
  local file=$1
  base=$(basename "$file" .js)
  eval terser --compress --comments false --output js/$base.js -- $file
}
export -f compile_js
parallel -j 8 compile_js ::: pr-js/*.js

# Merge meta files and js files after compile
for file in js/*.js; do
  base=$(basename "$file" .js)
  cat "meta/$base.meta.js" "js/$base.js" > "release/$base.user.js"
done

#Releasing
mv meta/*.meta.js release/
mv List release/README.md

#Checking convert errors:
for meta in release/*.meta.js; do
  base=${meta%.meta.js}
  if [ ! -f "$base.user.js" ]; then
     echo -e "\e[31m[-] Failed to convert user file $base.user.js\e[0m"
  fi
done