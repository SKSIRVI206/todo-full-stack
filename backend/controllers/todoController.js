// import statement here
//import todoModel from '../models/todoModel.js'
// router.get('/',(req, res)=>{
//     res.status(200).json({
//         message:'Get all Todo'
//     })
// })

import {
    getAllTodo as getAllTodoService,
    createTodo as createTodoService,
    deleteTodo as deleteTodoService,
    updateTodo as updateTodoService,
    updateTodoStatus as updateTodoStatusService
} from '../service/todoService.js';

const getAllTodo = async(req, res) =>{
    try {
        const todos = await getAllTodoService();
        res.status(200).json({
            message:'Get all todos',
            data: todos
        });
    } catch (error) {
        res.status(500).json({
            message:'Error getting todos',
            error: error.message
        });
    }
}

// router.post('/',(req, res)=>{
//     res.status(200).json({
//         message:'Create Todo'
//     })
// })

const createTodo = async(req, res)=>{
    try {
        const newTodo = await createTodoService(req.body);
        res.status(201).json({
            message:'Todo created successfully',
            data: newTodo
        });
    } catch (error) {
        res.status(500).json({
            message:'Error creating todo',
            error: error.message
        });
    }
}
// router.delete('/:id', (req, res)=>{
//     const id = req.params.id;
//     res.status(200).json({message: 'Todo deleted successfully'})
// })
const deleteTodo = async(req, res)=>{
    try {
        const deletedTodo = await deleteTodoService(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({
                message:'Todo not found'
            });
        }
        res.status(200).json({
            message:'Todo deleted successfully',
            data: deletedTodo
        });
    } catch (error) {
        res.status(500).json({
            message:'Error deleting todo',
            error: error.message
        });
    }
}
// router.put('/:id', (req, res)=>{
//     const id = req.params.id;
//     const data = req.body;
//     res.status(200).json({message: 'Todo updated successfully', data: updatedData})
// })
const updateTodo = async(req, res)=>{
    try {
        const id = req.params.id;
        const data = req.body;
        const updatedTodo = await updateTodoService(id, data);
        if (!updatedTodo) {
            return res.status(404).json({
                message:'Todo not found'
            });
        }
        res.status(200).json({
            message:'Todo updated successfully',
            data: updatedTodo
        });
    } catch (error) {
        res.status(500).json({
            message:'Error updating todo',
            error: error.message
        });
        
    }
}

// update todo status
// api end point /api/:id

const updateTodoStatus = async(req, res)=>{
    const id = req.params.id;
    const todoStatus = req.body;
    try {
        const updatedTodoStatus = await updateTodoStatusService(id, todoStatus);
        if (!updatedTodoStatus) {
            return res.status(404).json({
                message:'Todo not found'
            });
        }
        res.status(200).json({
            message:'Todo updated successfully',
            data: updatedTodoStatus
        });
    } catch (error) {
         res.status(500).json({
            message:'Error updating todo',
            error: error.message
        });
    }
}

export { createTodo, getAllTodo, deleteTodo, updateTodo, updateTodoStatus }


