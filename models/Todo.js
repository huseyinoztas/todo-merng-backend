

import mongoose from "mongoose";
const Schema=mongoose.Schema;

const todoSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    date:Date,

},{timeStamps:true})


const Todo=mongoose.model('todo',todoSchema)

export default Todo



