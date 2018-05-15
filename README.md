# koa2-React starter 

## Dependencies
you need to install both server & client dependencies 
```bash
cd server & npm i
cd client && npm i 
```
## Development
in development you will need to run 2 processes then access the app at `http://127.0.0.1:3000` (react dev server will proxy to api at :3030)
```bash
# run the server
cd server && npm start

# run the react dev server
cd client && npm strat
```

## Production
in production only run the koa server and access the app at `http://127.0.0.1:3030` koa server will serve react production build `client/build`
```bash
npm start
```