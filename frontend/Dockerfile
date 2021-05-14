
FROM i386/ubuntu

RUN sudo apt-get update && apt-get install -y \
    curl \
    python \
    make \
    g++
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
RUN npm install -g npm

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

EXPOSE 4200
