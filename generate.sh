#! /bin/bash

rm output.txt
curl https://raw.githubusercontent.com/satoshilabs/slips/master/slip-0044.md >> slip44.md
node generate/parse.js >> output.txt
