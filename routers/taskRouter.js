const router = require('express').Router()
const db = require('../knexfunctions')

router.get('/', (req, res) => {
    db.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({Error: "There was an error getting a task list."})
    })
})

router.post('/', (req, res) => {
    db.addTask(req.body)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({Error: "There was a problem adding the task"})
    })
})


module.exports = router