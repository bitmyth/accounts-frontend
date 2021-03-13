FROM node:14 as build-stage
WORKDIR /app
COPY package*.json ./
# RUN npm config set 
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist /app
COPY docker/default.conf /etc/nginx/conf.d/default.conf