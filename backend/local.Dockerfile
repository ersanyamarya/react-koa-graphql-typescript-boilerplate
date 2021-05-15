
FROM node:lts-alpine3.13

WORKDIR /home/node/app
COPY . .

EXPOSE 3000

RUN npm ci
ENV NODE_ENV=production
RUN npm run build
ENV NODE_ENV=development
