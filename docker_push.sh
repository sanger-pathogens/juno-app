#!/bin/bash

# build and tag
docker build -t "sangerpathogens/juno-app$(jq -r '.version' package.json)" .

# push
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push "sangerpathogens/juno-app$(jq -r '.version' package.json)"