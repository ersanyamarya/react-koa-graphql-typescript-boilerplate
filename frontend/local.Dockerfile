FROM node:lts-alpine3.13

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

EXPOSE 4200
