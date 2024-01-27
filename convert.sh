#!/bin/bash

# Install Google Closure Compiler
npm i -g google-closure-compiler
# Make directories
mkdir download pr-js meta js release

# Download userscripts
count=1
while read -r url; do
  wget -q -U "User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/119.0" "$url" -O "download/$count.user.js"
  count=$((count+1))
done < <(grep -v -E '^#|^[[:space:]]*$' List)

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
  sed -i "s|// @updateURL .*|// @updateURL  https://raw.githubusercontent.com/$repository/release/release/$base.meta.js|" "$file"
done

# Parallel compile js files
function compile_js() {
  local file=$1
  base=$(basename "$file" .js)
  google-closure-compiler --warning_level QUIET --js "$file" --js_output_file "js/$base.js"
}
export -f compile_js
parallel -j 8 compile_js ::: pr-js/*.js

# Merge meta files and js files after compile
for file in js/*.js; do
  base=$(basename "$file" .js)
  cat "meta/$base.meta.js" "js/$base.js" > "release/$base.user.js"
done

mv meta/*.meta.js release/
