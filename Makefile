SHELL := /bin/bash

build:
	docker build --progress=plain -t sia_ag .
