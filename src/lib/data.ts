import { Task } from "./models";
import connectDb from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getTasks = async () => {
    try {
        connectDb();
        const tasks = await Task.find();
        console.log('tasks found')
        return tasks;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch tasks!");
    }
}

export const getTask = async (id:String) => {
    try {
        noStore();
        connectDb();
        const task = await Task.findOne({id});
        console.log(task);
        return task;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch task!");
    }
}


