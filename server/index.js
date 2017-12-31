const Koa = require('koa')
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')
const moviesRoutes = require('./routes/movies')
const app = module.exports = new Koa()

let PORT = 3030

if (process.env.NODE_ENV === 'test') {
  PORT = 3333
}

app.use(bodyParser())
app.use(moviesRoutes.routes())

// or use absolute paths
app.use(serve('../client/build'))

const server = app.listen(PORT, () => {
  console.log(`Listing to http://127.0.0.1:${PORT}`)
})

module.exports = server
