# accounts

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### docker

```sh
docker run -d -v ./docker/default.conf:/etc/nginx/conf.d/default.conf -v ./dist/:/usr/share/nginx/html -it --rm  -p:8800:80 nginx
```
