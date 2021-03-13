IMAGE := bitmyth/accounts-frontend
## Build a Docker image
image:
	docker build -t $(IMAGE) .

run-image:
	docker run --rm -it -p8086:80 $(IMAGE)

run:
	npm run serve