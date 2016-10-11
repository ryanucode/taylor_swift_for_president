#!/bin/bash
./node_modules/uglify-js/bin/uglifyjs taylor_swift_for_president.js |
cat prefix.txt - |
cat - suffix.txt |
tr -d "\n" |
tr -d "\r" |
tee bookmarklet.url
