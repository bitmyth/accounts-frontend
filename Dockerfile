FROM node:15 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN /usr/local/bin/npm run build

FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist /app
COPY docker/default.conf /etc/nginx/conf.d/default.conf