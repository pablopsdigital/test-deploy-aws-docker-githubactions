FROM node:16.14-alpine3.14

LABEL maintainer="pablopsdigital@gmail.com"
LABEL application="wallaclone-server"

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app
COPY . .
RUN npm install --silent
EXPOSE 3000
CMD ["npm","run","start"]

# create image
# docker build -t nombre-imagen directorioDockerfile
# docker build -t "wallaclone-server" .

# levantar la imagen
# docker run --rm -p 3000:3000 -it "wallaclone-server"


# FROM node:16.14-alpine3.14
# ENV NODE_ENV=production
# ENV PORT=3000
# WORKDIR /app
# COPY . .
# RUN npm install --silent
# EXPOSE 3000
# CMD ["npm", "start"]
