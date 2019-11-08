
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {project_id: 1, description:"Task for p1", notes: "sdfs", completed:false},
        {project_id: 1, description:"Another task for p1", notes:"dfsf", completed:false},
        {project_id: 2, description:"p2 task", notes: "sdf",completed:true},
        {project_id: 3, description:"p3 task",notes: "sdfas", completed:false},
        {project_id: 3, description:"Another task for p3",notes: "452132", completed:true},
      ]);
    });
};
