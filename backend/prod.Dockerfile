
FROM node:lts-alpine3.13 as build

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm ci
COPY ./build ./

EXPOSE 3000

