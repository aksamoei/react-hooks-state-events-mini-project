import React from "react";
import Task from "./Task";
import { useState } from "react";

function TaskList({tasks, setDisplayTasks}) {
  //const [displayTasks, setDisplayTasks] = useState(tasks)
  //console.log(tasks)
  const taskLists = tasks.map((taskList, index)=>{
    return <Task key={index} category={taskList.category} text={taskList.text} id={index} deletingTask={deleteTask}/>

    function deleteTask(index){
      //console.log(index)
      const filteredTasks = tasks.filter((ele, id)=>id !== index)
      //console.log(filteredTasks)
      setDisplayTasks(filteredTasks)
    }
  })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskLists}
    </div>
  );
}

export default TaskList;
