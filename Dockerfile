#https://hub.docker.com/_/node
#https://hub.docker.com/_/mongo
FROM alpine:3.14

ENV NODE_VERSION 16.14.0

RUN mkdir -p /usr/src/app

WORKDIR /src/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# CMD ["npm","start"]
CMD ["npm","run","dev"]








#docker run -d --hostname=mq --name mq -p 8080:15672 -p 5672:5672 rabbitmq:3-management