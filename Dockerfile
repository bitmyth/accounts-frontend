FROM node as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist .
COPY docker/default.conf /etc/nginx/conf.d/default.conf
