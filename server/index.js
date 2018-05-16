const Koa = require('koa')
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')
const morgan = require('koa-morgan')
const usersRoutes = require('./routes/users')
const app = module.exports = new Koa()
// TODO: add eslint, editorconfig
require('dotenv').config()
console.log(process.env.DB_HOST)
// TODO: Apply passport auth
let PORT = 3030

if (process.NODE_ENV === 'test') {
  PORT = 3333
}
app.use(morgan('dev')) // dev, short, tiny, common, combined
app.use(bodyParser())
app.use(usersRoutes.routes())

if (process.env.NODE_ENV === 'production') {
  // serve react build in production
  app.use(serve('./client/build'));
}

console.log(__dirname)

const server = app.listen(PORT, () => {
  console.log(`Listing to http://127.0.0.1:${PORT}`)
})

module.exports = server
