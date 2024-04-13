import { Task } from "@/lib/models";
import  connectDb  from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDb();
        const tasks = await Task.find();
        return NextResponse.json(tasks);
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch tasks!");
    }
}

export const POST = async (req:Request) => {
    try {
  
      const { title, body, assignedTo, isDone, priority } = await req.json();
      await connectDb();
      await Task.create({
        title,
        body,
        assignedTo,
        isDone,
        priority,
      });
      
  
      return NextResponse.json({message: "Topic Created"} , {status: 201});
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create task');
    }
  };
  
