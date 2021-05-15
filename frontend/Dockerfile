FROM node:lts-alpine3.13

RUN apk add --update --no-cache --virtual .build-deps alpine-sdk python3 py3-pip
RUN npm install -g npm


WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

EXPOSE 4200
