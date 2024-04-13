import AddTask from '@/components/AddTask/AddTask';
import React from 'react';

function HomePage() {
  return (
    <div >
      <h1>Welcome to  Task Management App</h1>
      <p>This is the homepage of the task management application.</p>
      <AddTask/>
    </div>
  );
}

export default HomePage;
