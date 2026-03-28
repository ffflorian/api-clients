#!/usr/bin/env bash

# Environment variables:
#
# - GITHUB_TOKEN: A GitHub token for pushing to GitHub (required)
# - GH_USER: A GitHub user for pushing to GitHub (required)

set -e

INCLUDE_ARGS=()

if [ -z "${GITHUB_TOKEN}" ]; then
  echo "No GitHub token set."
  exit 1
fi

echo "Checking for changed packages..."

LAST_TAG=$(git describe --abbrev=0 --tags 2>/dev/null || echo "")

if [ -z "${LAST_TAG}" ]; then
  echo "No previous tags found."
  exit
fi

for PKG_DIR in packages/*/; do
  if ! git diff --quiet "${LAST_TAG}" HEAD -- "${PKG_DIR}"; then
    PKG_NAME=$(node -p "require('./${PKG_DIR}package.json').name")
    INCLUDE_ARGS+=(--include "${PKG_NAME}")
  fi
done

if [ ${#INCLUDE_ARGS[@]} -eq 0 ]; then
  echo "No local packages have changed since the last tagged release."
  exit
fi

yarn workspaces foreach --jobs 4 "${INCLUDE_ARGS[@]}" run build:docs

git add docs
git commit -m "docs: Rebuild docs [ci skip]" --no-verify
git push origin main --no-verify
