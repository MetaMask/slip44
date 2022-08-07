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

PR_TITLE="Update with latest data as of ${CURRENT_DATE}"

git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"

git checkout -b "update-slip44-${CURRENT_DATE}"

git add .
git commit -m "${PR_TITLE}"

gh pr create \
  --title "${PR_TITLE}" \
  --body "Updates the package with the latest SLIP-44 data as of ${CURRENT_DATE}." 
