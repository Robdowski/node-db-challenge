
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: "project1"},
        {name: "project2"},
        {name: "project3"}
      ]);
    });
};
