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

  return (
    <div className="container">
      <Header /> 
      <Tasks taskList = {tasksList}/>
    </div>
  );

    
}


export default App;
