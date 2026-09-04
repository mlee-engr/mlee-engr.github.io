# Build the image
```
docker run --rm -itp 8080:8080 -p 3001:3001 -v ./content:/usr/src/app/ $(docker build -q .)
```

# Launch image
```
docker run --rm -it -p 8080:8080 -p 3001:3001 -v "$(pwd):/usr/src/app" -v portfolio_node_modules:/usr/src/app/node_modules portfolio:latest
```