import React from 'react'

export const TodoCard = ({bhai}) => {
    const { id, title, description, priority, category, dueDate,completed } = bhai
    
    // function checkStatus() {
    //     return (
    //         (completed === true) ? "task done ✅" : "task remaining ♦️"
    //     )
        
    // }
  return (
    <div className=" border-2 border-black w-[450px] h-[220px] p-4 bg-[#b8b8b8]">
      <li key={id} className=" list-none  ">
        <h1 className="text-2xl font-bold  ">{title}</h1>
        <p>{description}</p>
        <p>{priority}</p>
        <i>{category}</i>
        <p>{dueDate}</p>
        <p>{completed ? "done ✅" : "not done ♦️ "}</p>
      </li>
    </div>
  );
}
