
FROM node:lts-alpine3.13 as build

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM node:lts-alpine3.13

ENV NODE_ENV=production

WORKDIR /home/node/app
COPY --from=build --chown=node:node /home/node/app/dist ./
COPY package.json package-lock.json ./
RUN npm install --production
CMD [ "node", "server" ]