FROM node:20.11.1

WORKDIR /usr/server

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["node", "server.cjs"]