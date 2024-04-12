import mongoose from 'mongoose'


const taskSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    body:{
        type:String,
        required:true,
        max:100
    },
    assignedTo: {
        type: String,
        required:true 
    },
    isDone:{
        type:Boolean,
        required:true,
    },
    img:{
        type:String,
    },

},{timestamps: true})

export const Task = mongoose.models.Task || mongoose.model("Task" , taskSchema);
