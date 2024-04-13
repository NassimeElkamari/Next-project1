import { Task } from "@/lib/models";
import connectDb from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async ()=>{
    try {

        connectDb();

        const tasks = await Task.find();        
        return NextResponse.json(tasks)
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch tasks!")
    }
}