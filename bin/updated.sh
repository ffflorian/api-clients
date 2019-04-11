#!/usr/bin/env bash

set -e

COMMAND="$@"

if [ -z "${COMMAND}" ]; then
  echo "No command specified."
  exit 1
fi

echo "Checking for changed packages..."

PACKAGES="$(npx lerna changed --loglevel warn)"

echo "${PACKAGES}"

if [ -z "${PACKAGES}" ]; then
  echo "No local packages have changed since the last tagged release."
  exit 78
fi

for PACKAGE in $PACKAGES; do
  echo "Running \"${COMMAND}\" for package \"${PACKAGE}\"..."
  npx lerna run --scope "${PACKAGE}" "${COMMAND}"
done
