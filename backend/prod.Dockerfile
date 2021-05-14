
FROM node:lts-alpine3.13

WORKDIR /home/node/app

COPY build/* ./

EXPOSE 3000

