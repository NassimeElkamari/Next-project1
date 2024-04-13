"use client"
import React, { useEffect, useState } from 'react';

const getTasks = async () => {
  const res = await fetch('http://localhost:3000/api/tasks');

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className='container flex'>
      {tasks.map((task:any) => (
        <div className='task' key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.body}</p>
          <p>{task.assignedTo}</p>
          <p>{task.isDone}</p>
          <p>{task.priority}</p>
        </div>
      ))}
    </div>
  );
};

export default TasksPage;
