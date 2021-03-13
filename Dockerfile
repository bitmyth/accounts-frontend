FROM node:15.11.0-alpine3.10 as build-stage
WORKDIR /app
COPY package*.json ./
# RUN npm config set 
RUN npm install -g npm@7.6.3
RUN npm --registry http://registry.npmjs.org install
COPY . .
RUN npm run build

FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist /app
COPY docker/default.conf /etc/nginx/conf.d/default.conf