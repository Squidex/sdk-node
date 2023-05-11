#!/usr/bin/env sh

# before running this script, make sure:
# 1. the server is running at localhost:8080
# 2. the environment variables SQUIDEX_CLIENT_ID and SQUIDEX_CLIENT_SECRET are defined

yarn add -D jest @types/jest @babel/preset-typescript @babel/preset-env
yarn jest src/tests