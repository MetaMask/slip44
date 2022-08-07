#! /bin/bash

set -x
set -e
set -o pipefail

CURRENT_DATE=${1}

if [[ -z $CURRENT_DATE ]]; then
  echo "Error: No current date specified."
  exit 1
fi

yarn fetch

if git diff --exit-code; then
  echo "No changes detected, exiting."
  exit 0
fi

yarn build:clean
yarn lint:fix
yarn test

git config user.name github-actions
git config user.email github-actions@github.com

git add .
git commit -m "Update with latest data as of ${CURRENT_DATE}"
git push -u origin main

NUM_EXISTING_RELEASE_PRS=$( 
  gh pr list --json headRefName |
  jq '. |
    map(select(
      (.headRefName | test("^release\/"; "i"))
    )) |
    length'
)

if [[ $NUM_EXISTING_RELEASE_PRS == 0 ]]; then
  echo "No existing release PR found, creating release."
  gh workflow run create-relese-pr.yml -f release-type=minor
else
  echo "Existing release PR found, exiting."
fi
