FROM node:14.0.8-alpine3.10

WORKDIR /app

RUN npm install --unsafe-perm -g yarn && \
    chmod +x /usr/local/bin/yarn

# ENTRYPOINT ls -la

ENTRYPOINT rm -rf node_modules && \
           yarn && \
           yarn dev