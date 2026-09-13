import todoModel from '../models/todoModel.js';

const getAllTodo = async () => {
    return await todoModel.find();
};

const createTodo = async (data) => {
    return await todoModel.create(data);
};

const deleteTodo = async (id) => {
    return await todoModel.findByIdAndDelete(id);
};

const updateTodo = async (id, data) => {
    return await todoModel.findByIdAndUpdate(
        id,
        data,
        { new: true }
    );
};

const updateTodoStatus = async (id, data) => {
    return await todoModel.findByIdAndUpdate(
        id,
        data,
        { new: true }
    );
};

export {
    getAllTodo,
    createTodo,
    deleteTodo,
    updateTodo,
    updateTodoStatus
};
