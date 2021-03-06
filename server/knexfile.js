const path = require('path')

const BASE_PATH = path.join(__dirname, 'db')

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(BASE_PATH, 'app.db')
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
    client: 'sqlite3',
    connection: {
      filename: path.join(BASE_PATH, 'app_test.db')
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
