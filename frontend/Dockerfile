
FROM node

WORKDIR /home/node/app

RUN npm install -g npm
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

EXPOSE 4200
