const Router = require('koa-router')
const router = new Router()
const queries = require('../db/queries/movies')
require('dotenv').config()

// TODO: apply the same pattern as oasis-backend for passing baseUrl
const BASE_URL = '/api/v1/movies'
console.log('*****', process.env.DB_HOST)
router.get(BASE_URL, async (ctx) => {
  try {
    console.log(process.env.DB_HOST)
    const allMovies = await queries.getAllMovies()
    ctx.body = {
      status: 'success',
      data: allMovies
    }
  } catch (err) {
    // TODO: Apply error handler middleware
    console.log(err)
  }
})

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const movie = await queries.getMovieById(ctx.params.id)
    if (movie.length > 0) {
      ctx.body = {
        status: 'success',
        data: movie
      }
    } else {
      ctx.status = 404
      ctx.body = {
        status: 'error',
        message: 'That movie does not exist.'
      }
    }
  } catch (err) {
    console.log(err)
  }
})

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    const movie = await queries.addMovie(ctx.request.body)
    if (movie.length) {
      ctx.status = 201
      ctx.body = {
        status: 'success',
        data: movie
      }
    } else {
      ctx.status = 400
      console.log('Error wen wrong')
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      }
    }
  } catch (err) {
    ctx.status = 400
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    }
  }
})

module.exports = router
