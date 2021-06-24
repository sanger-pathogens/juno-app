# docker-in-docker image for use with gitlab-ci
# network needs to be configured to avoid clash with Sanger private network
# build with
#
#    TAG=gitlab-ci-dind:$(git rev-parse HEAD)
#    REGISTRY=gitlab-registry.internal.sanger.ac.uk/sanger-pathogens/juno-app
#    docker login "${REGISTRY}"
#    docker build --tag "${TAG}" .
#    docker tag "${TAG}" "${REGISTRY}/${TAG}"
#    docker push "${REGISTRY}/$TAG"

FROM docker:19.03.14-dind
COPY etc-docker-daemon.json /etc/docker/daemon.json
