exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries then add new
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        { username: 'admin', password: 'admin' },
      ])
    })
}
