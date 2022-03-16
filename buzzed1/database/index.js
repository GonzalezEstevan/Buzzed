const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: 'estevangonzalez',
  database: 'drinks',
  port: 5432
})

module.exports = pool