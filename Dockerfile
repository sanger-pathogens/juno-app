ARG NODE_VERSION=14.16.1

# build step
# recommend using local container registry for CI to avoid dockerhub pull limits killing the pipeline
FROM gitlab-registry.internal.sanger.ac.uk/sanger-pathogens/juno-app/node:$NODE_VERSION as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm install
RUN npm run build

# production environment
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
