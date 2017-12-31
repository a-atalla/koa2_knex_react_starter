process.env.NODE_ENV = 'test'
const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const server = require('../src/server/index')
const knex = require('../src/server/db/connection')

describe('routes : movies', () => {
  beforeEach(() => {
    return knex.migrate.rollback()
      .then(() => { return knex.migrate.latest() })
      .then(() => { return knex.seed.run() })
  })

  describe('GET /api/v1/movies', () => {
    it('should return all movies', () => {
      chai.request(server)
        .get('/api/v1/movies')
        .end((err, res) => {
          should.not.exist(err)
          res.status.should.equal(200)
          res.type.should.equal('application/json')
          res.body.status.should.equal('success')
          res.body.data.length.should.equal(2)
          res.body.data[0].should.include.keys('id', 'name', 'genre', 'rating', 'explicit')
        })
    })
  })

  describe('GET /api/v1/movies/:id', () => {
    it('should return a single movie', () => {
      chai.request(server)
        .get('/api/v1/movies/1')
        .end((err, res) => {
          should.not.exist(err)
          res.status.should.equal(200)
          res.type.should.equal('application/json')
          res.body.status.should.equal('success')
          res.body.data[0].should.include.keys('id', 'name', 'genre', 'rating', 'explicit')
        })
    })

    it('should throw an erro if movie does not exist', () => {
      chai.request(server)
        .get('/api/v1/movies/9999')
        .end((err, res) => {
          should.exist(err)
          res.status.should.equal(404)
          res.type.should.equal('application/json')
          res.body.status.should.equal('error')
          res.body.message.should.equal('That movie does not exist.')
        })
    })
  })

  describe('POST /api/v1/movies', () => {
    it('should add new movies to database', () => {
      chai.request(server)
        .post('/api/v1/movies')
        .send({
          name: 'Titanic',
          genre: 'Romance',
          rating: 7,
          explicit: true
        })
        .end((err, res) => {
          should.not.exist(err)
          res.status.should.equal(201)
          res.type.should.equal('application/json')
          res.body.status.should.equal('success')
          res.body.data[0].should.include.keys('id', 'name', 'genre', 'rating', 'explicit')
        })
    })

    it('should throw an error if the payload is malformed', () => {
      chai.request(server)
        .post('/api/v1/movies')
        .send({name: 'Titanic'})  // missing required fields
        .end((err, res) => {
          should.exist(err)
          res.status.should.equal(400)
          res.type.should.equal('application/json')
          res.body.status.should.equal('error')
          should.exist(res.body.message)
        })
    })
  })

  afterEach(() => {
    return knex.migrate.rollback()
  })
})
