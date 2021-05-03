import knex from 'knex'

export default knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'opto'
  }
})