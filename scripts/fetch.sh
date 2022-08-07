#! /bin/bash

set -x
set -e
set -o pipefail

curl https://raw.githubusercontent.com/satoshilabs/slips/master/slip-0044.md > "$(dirname "$0")/../src/slip44.md"

