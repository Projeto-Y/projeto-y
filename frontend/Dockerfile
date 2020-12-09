FROM node:15.2-alpine3.12

# hadolint ignore=DL3018
RUN apk --no-cache --update add bash

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY docker/ensure_deps.sh /usr/local/bin/ensure_deps

COPY package.json ./
COPY yarn.lock ./

RUN yarn

EXPOSE 3000

CMD [ "yarn", "start" ]
