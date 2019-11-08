const knex = require('./data/dbconfig')


const addProject = (data) => {
    knex('project')
    .insert(data)
}

const getProjects = () => {
    knex.select('*').from('projects')
}

const addResource = data => {
    knex('resource')
    .insert(data)
}

const getResources = () => {
    knex.select('*').from('resources')
}

const addTask = data => {
    knex('task').insert(data)
}

const getTasks = () => {
    knex('task')
    .join('project', 'task.project_id', '=', 'project.id')
    .select('task.*', 'project.name', 'project.description')
}


module.exports = { addProject, getProjects, addResource, getResources, addTask, getTasks}