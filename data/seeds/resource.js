
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: "resource1"},
        {name: "resource2"},
        {name: "resource3"}
      ]);
    });
};
