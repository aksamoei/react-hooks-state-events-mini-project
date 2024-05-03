import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [displayTasks, setDisplayTasks] = useState(TASKS)

function addItem (newItem){
  //console.log(newItem)
  setDisplayTasks([...displayTasks, newItem])
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} displayTasks={displayTasks} setDisplayTasks={setDisplayTasks}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addItem}/>
      <TaskList tasks={displayTasks} setDisplayTasks={setDisplayTasks}/>
    </div>
  );
}

export default App;
