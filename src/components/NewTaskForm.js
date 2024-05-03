import React from "react";
import { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [cat, setCat] = useState("Code")
  const [details, setDetails] = useState("")

  const removeAll = categories.filter((catego)=>catego !== "All")
  //console.log(removeAll)

  const displayCategories = removeAll.map((category, index)=>{
    return <option key={index} value={category}>{category}</option>
  })

  function handleCategory(event){
    setCat(event.target.value)
  }

  function handleDetails (event){
    setDetails(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    const newTask = {
      text: details,
      category: cat
    }
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetails}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory} value={cat}>
          {/* render <option> elements for each category here */}
          {displayCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
