#!/bin/bash
tmp=$(mktemp)
VERSION='"'$1'"'
jq ".version = $VERSION" package.json > "$tmp" && mv "$tmp" package.json