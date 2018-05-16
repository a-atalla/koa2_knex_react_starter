exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('username')
    table.string('password')
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at');
    
  })
}

exports.down = (knex, Promise) => {
  return knex.schema  
          .dropTable('users')
å}
