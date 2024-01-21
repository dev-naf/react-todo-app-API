const router = require('express').Router()
const controller = require('../controller/todo-controller')

// get all todo
router.get('/',controller.allTodo)

// get todo by ID
router.get('/:id',controller.getTodoByID) 

// delete todo by ID
router.delete('/:id',controller.delTodoById)

// update todo by ID
router.put('/:id',controller.updateTodoById)

// add todo
router.post('/', controller.addTodo)

// check todo
router.get('/check/:id',controller.checkTodo)

// uncheck todo
router.get('/uncheck/:id',controller.uncheckTodo)

module.exports = router