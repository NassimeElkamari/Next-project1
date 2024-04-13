"use client"
import React, { useState } from 'react';
import styles from '@/components/AddTask/addtask.module.css'; 



const AddTask = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [priority, setPriority] = useState('');
  const [img, setImg] = useState('');
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
        assignedTo,
        isDone,
        priority,
      }),
      });      

      if (!res.ok) {
        throw new Error('Failed to create task');
      }

      console.log('Task Added successfully');
      

      setTitle('');
      setBody('');
      setAssignedTo('');
      setIsDone(false);
      setPriority('');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className={styles.container}> 
      <h1 className={styles.heading}>Add Task</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="title" className={styles.label}>Title:</label>
          <input
            type="text"
            id="title"
            className={styles.input} 
            value={title}
            onChange={(e) =>  setTitle(e.target.value)
            }
            required
          />
        </div>
        <div>
          <label htmlFor="body" className={styles.label}>Body:</label>
          <textarea
            id="body"
            className={styles.textarea} 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="assignedTo" className={styles.label}>Assigned To:</label>
          <input
            type="text"
            id="assignedTo"
            className={styles.input} 
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="isDone" className={styles.label}>Is Done:</label>
          <input
            type="checkbox"
            id="isDone"
            className={styles.checkbox} 
            checked={isDone}
            onChange={(e) => setIsDone(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="priority" className={styles.label}>Priority:</label>
          <select
            id="priority"
            className={styles.select} 
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label htmlFor="img" className={styles.label}>Image URL:</label>
          <input
            type="text"
            id="img"
            className={styles.input}
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.button}>Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
