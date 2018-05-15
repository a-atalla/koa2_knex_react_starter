process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')

// TODO: replace mocha and chai with jest 

chai.use(chaiHttp)
const server = require('../index')

describe('routes : index', () => {
  describe('GET /', () => {
    it('should return json', () => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          should.not.exist(err)
          res.status.should.eql(200)
          res.type.should.equal('application/json')
          res.body.status.should.equal('success')
          res.body.message.should.equal('hello, world!')
          // done()
        })
    })
  })
})
