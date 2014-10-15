.PHONY: lint

default: test

lint:
	node_modules/jshint/bin/jshint --verbose *.js

test: lint

beefy :
	beefy index.js:bundle.js --live


