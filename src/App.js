import Header from './components/Header.js'
import React from 'react'
import Tasks from './components/Tasks.js'
import { useState } from "react"

function App() {

  const [tasksList, setTasks] = useState(
    [
      {
        id: 1,
        text: "Job 1",
        reminder: false,
        day: 'Never'
      },
      {
        id: 2,
        text: "Job 2",
        reminder: false,
        day: 'Today'
      },
      {
        id: 3,
        text: "Job 3",
        reminder: false,
        day: 'Never'
      },
    ]
  )

  // Delete a Task Function
  const deleteTask = (id) => {
    setTasks(tasksList.filter(
      (tasksList) => tasksList.id !== id
    ))
  }

  let Body;

  if(tasksList.length > 0)
    Body = <Tasks taskList = {tasksList} onDelete={deleteTask} /> 
  else
    Body = <h1>No Tasks</h1> 

  return (
    <div className="container">
      <Header /> 
      {Body}
        
    </div>
  );

    
}


export default App;
