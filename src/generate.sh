#! /bin/bash

rm slip44.json
curl https://raw.githubusercontent.com/satoshilabs/slips/master/slip-0044.md >> src/slip44.md
node src/parse.js >> slip44.json
