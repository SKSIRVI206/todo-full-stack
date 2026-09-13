import express from 'express'
import { createTodo, getAllTodo, deleteTodo, updateTodo,updateTodoStatus } from '../controllers/todoController.js'
const router = express.Router()
// get all todos
router.get('/', getAllTodo)
// create a new todo
router.post('/',createTodo)
// delete a todo by id
router.delete('/:id', deleteTodo)
// update a todo details by id
router.put('/:id', updateTodo)
// update todo status
router.patch('/:id', updateTodoStatus);
export default router