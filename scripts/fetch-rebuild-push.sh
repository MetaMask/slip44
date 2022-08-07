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
  # Exit with a non-zero code so that the workflow fails
  exit 1
fi

yarn build:clean
yarn lint:fix
yarn test

git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"

git add .
git commit -m "Update with latest data as of ${CURRENT_DATE}"
git push -u origin main
