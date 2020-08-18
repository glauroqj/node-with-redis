FROM node:12.18.3-alpine3.9
# FROM node:12.10.0-alpine

WORKDIR /app

RUN npm install --unsafe-perm --force -g yarn && \
    chmod +x /usr/local/bin/yarn

# ENTRYPOINT ls -la

ENTRYPOINT rm -rf node_modules && \
           yarn && \
           yarn dev