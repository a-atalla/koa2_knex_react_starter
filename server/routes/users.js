const Router = require('koa-router')
const router = new Router()
const queries = require('../db/queries/users')
require('dotenv').config()

// TODO: apply the same pattern as oasis-backend for passing baseUrl
const BASE_URL = '/api/v1/user'

router.get(BASE_URL, async (ctx) => {
  try {
    const allUsers= await queries.getAllUsers()
    ctx.body = {
      status: 'success',
      users: allUsers
    }
  } catch (err) {
    // TODO: Apply error handler middleware
    console.log(err)
  }
})

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const user = await queries.getUserById(ctx.params.id).first()
    if (user) {
      ctx.body = {
        status: 'success',
        user
      }
    } else {
      ctx.status = 404
      ctx.body = {
        status: 'error',
        message: 'That user does not exist.'
      }
    }
  } catch (err) {
    console.log(err)
  }
})

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    const user = await queries.addUser(ctx.request.body)
    if (user.length) {
      ctx.status = 201
      ctx.body = {
        status: 'success',
        userId: user[0]
      }
    } else {
      ctx.status = 400
      console.log('Error went wrong')
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
