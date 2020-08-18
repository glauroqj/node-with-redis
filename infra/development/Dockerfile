FROM node:12.10.0-alpine
# FROM node:14.8.0-alpine3.10

WORKDIR /app

RUN npm install --unsafe-perm --force -g yarn && \
    chmod +x /usr/local/bin/yarn

# ENTRYPOINT ls -la

ENTRYPOINT rm -rf node_modules && \
           yarn && \
           yarn dev