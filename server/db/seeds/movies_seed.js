exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(() => {
      // Inserts seed entries
      return knex('movies').insert([
        {name: 'Lord Of The Rings', genre: 'Fantasy', rating: 10, explicit: true},
        {name: 'Ice Age', genre: 'Animation', rating: 8, explicit: false}
      ])
    })
}
