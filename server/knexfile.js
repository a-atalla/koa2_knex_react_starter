const path = require('path')

const BASE_PATH = path.join(__dirname, 'db')

module.exports = {
  development: {
    // client: 'pg',
    client: 'sqlite3',

    // connection: 'postgres://username:password@localhost:5432/movies',
    connection: {
      filename: path.join(BASE_PATH, 'articles.db')
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  test: {
    // client: 'pg'
    client: 'sqlite3',

     // connection: 'postgres://username:password@localhost:5432/movies',
    connection: {
      filename: path.join(BASE_PATH, 'articles_test.db')
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
}
