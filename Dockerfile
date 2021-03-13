FROM node:15.11.0-alpine3.10 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@7.6.3
RUN npm install -g yarn
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist /app
COPY docker/default.conf /etc/nginx/conf.d/default.conf