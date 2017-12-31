const knex = require('../connection')

const getAllMovies = () => {
  // return a promise
  return knex('movies').select('*')
}

const getMovieById = (movieId) => {
  return knex('movies').select('*').where({id: parseInt(movieId)})
}
const addMovie = (movie) => {
  return knex('movies').insert(movie).returning('*')
}
module.exports = {
  getAllMovies,
  getMovieById,
  addMovie
}
