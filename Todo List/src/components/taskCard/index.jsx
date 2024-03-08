import React from "react";
import { useTask } from "../../context/TaskContext";

import { RiCheckboxFill , RiCheckboxBlankLine , RiDeleteBin6Line } from "react-icons/ri";

const TaskCard = ({ task }) => {

  const { deleteTasks, updateTask } = useTask()

  const handleDelet = ()=>{
    // alert("Deleting")
    deleteTasks(task.id)
  }

  const handleToggleDone  = ()=>{
    updateTask(task.id, {done: !task.done})
  }

  var created_at = task.created_at.substring(0, 10)
  return (
    <div 
      className="w-[370px] border-2 py-2 px-3 flex items-center justify-between rounded-lg"
      key={task.id}>
        <div>
          <h1 className="font-medium text-primary-950">{task.name}</h1>
          <span className="text-xs ">{created_at}</span>
        </div>
      
      <div className="text-lg flex items-center gap-3">
        <button onClick={()=>  handleDelet()}>
          <RiDeleteBin6Line className="text-red-500"/>
        </button>
        <button onClick={()=>  handleToggleDone()}>
          {
            task.done ? <RiCheckboxFill className="text-green-500"  /> : <RiCheckboxBlankLine  className="text-green-900"/>
          }
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
