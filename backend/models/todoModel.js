import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    isCompleted:{
        type: Boolean,
        required: true
    }

},{timestamps:true})

const todoModel = mongoose.model('Todo', todoSchema);

export default todoModel