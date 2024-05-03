import React from "react";
import { useState } from "react";

function CategoryFilter({categories, displayTasks, setDisplayTasks}) {
  //const [clickedCategory, setClickedCategory] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [originalTasks] = useState(displayTasks)

  const displayCategories = categories.map((category)=>{
    return <button key={category} className={selectedCategory === category ? "selected" : null} onClick={()=>handleClick(category)}>{category}</button>
  })

  function handleClick (cat){
    setSelectedCategory(cat === selectedCategory ? null : cat);
    if (cat==="All") {
      setDisplayTasks(originalTasks);
    }
    else{
      const filtered = originalTasks.filter((ele) => ele.category === cat);
      setDisplayTasks(filtered);
    }
  
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;
