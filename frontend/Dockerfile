
FROM node:lts-alpine3.13 as build

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.15-alpine

COPY --from=build /home/node/app/dist /var/www/web

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]