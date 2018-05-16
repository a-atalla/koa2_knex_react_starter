const knex = require('../connection')

const getAllUsers = () => {
  // return a promise
  return knex('users').select('*')
}

const getUserById = (userId) => {
  return knex('users').select('*').where({id: parseInt(userId)})
}
const addUser = (user) => {
  return knex('user').insert(user).returning('*')
}


module.exports = {
  getAllUsers,
  getUserById,
  addUser
}
