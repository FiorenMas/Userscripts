#!/bin/bash

# Install Terser
npm install terser -g > /dev/null 2>&1
# Make directories
mkdir download pr-js meta js release

# Download userscripts
while read -r line; do
  if [[ $line == \#* ]]; then
    urls=($(echo "$line" | grep -oP 'https://\S+?\.user\.js'))
    if [[ ${#urls[@]} -ge 1 ]]; then
      url=${urls[0]}
      file=$(basename "$url")
      file=$(echo "$file" | tr -cd '[:alnum:].')
      if [[ -f "download/$file" ]]; then
        suffix="A"
        while [[ -f "download/$suffix$file" ]]; do
          suffix=$(echo "$suffix" | tr "0-9A-Z" "1-9A-Z_")
        done
        file="$suffix$file"
      fi
      wget -q --header="User-Agent: Mozilla/5.0 (Android 14; Mobile; rv:134.0) Gecko/134.0 Firefox/134.0" \
           --header="Content-Type: application/octet-stream" \
           --header="Accept-Language: en-US,en;q=0.9" \
           --header="Connection: keep-alive" \
           --header="Upgrade-Insecure-Requests: 1" \
           --header="Cache-Control: max-age=0" \
           --header="Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8" \
           --keep-session-cookies --timeout=30 "$url" -O "download/$file"
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

# Switch @downloadURL and @updateURL to our repository, remove unnecessary locale
for file in meta/*.meta.js; do
  base=$(basename "$file" .meta.js)
  sed -i '/^\/\/ @name:/ { /^\/\/ @name:en/!d }' "$file"
  sed -i '/^\/\/ @description/d' "$file"
  sed -i "s|// @downloadURL .*|// @downloadURL https://raw.githubusercontent.com/$repository/release/release/$base.user.js|" "$file"
  sed -i "s|// @updateURL .*|// @updateURL https://raw.githubusercontent.com/$repository/release/release/$base.meta.js|" "$file"
done

# Parallel compile js files
function compile_js() {
  local file=$1
  base=$(basename "$file" .js)
  eval terser --compress --mangle --comments false --parse bare_returns --output js/$base.js -- $file
}
export -f compile_js
parallel -j 16 compile_js ::: pr-js/*.js

# Merge meta files and js files, check errors
for file in js/*.js; do
  base=$(basename "$file" .js)
  userscript_name=$(grep -m 1 -oP '^// @name:en\s+\K.*' "meta/$base.meta.js" || \
                   grep -m 1 -oP '^// @name\s+\K.*' "meta/$base.meta.js")
  userscript_name=$(echo "$userscript_name" | tr -d '\r\n')
  if [[ -z "$userscript_name" ]]; then
    echo -e "\e[31mError: Missing \"$base.meta.js\"\e[0m"
    rm -f meta/$base.meta.js release/$base.user.js
  fi
  js_file_content=$(cat "js/$base.js")
  js_file_length=${#js_file_content}
  if [[ $js_file_length -lt 100 ]]; then
    echo -e "\e[31mFailed to convert userscript: \"$userscript_name\"\e[0m"
    rm -f meta/$base.meta.js release/$base.user.js
  else
    cat "meta/$base.meta.js" "js/$base.js" > "release/$base.user.js"
    echo -e "Completed to convert userscript: \"$userscript_name\""
  fi
done

#Releasing
mv meta/*.meta.js release/
mv List release/README.md
