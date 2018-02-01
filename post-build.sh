#!/bin/bash
tmp=$(mktemp)
jq '.version = "v0.0.0-development"' package.json > "$tmp" && mv "$tmp" package.json