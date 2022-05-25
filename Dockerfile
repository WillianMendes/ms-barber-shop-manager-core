FROM node:16.15-alpine as build

WORKDIR /usr/app/src

COPY package.json .
RUN yarn

RUN yarn cache clean

COPY . .
RUN yarn build

FROM node:16.15-alpine as run

WORKDIR /usr/app

COPY package.json .
COPY .env ./
COPY --from=build /usr/app/src/dist ./

RUN yarn install --production

ENTRYPOINT ["node", "main.js"]