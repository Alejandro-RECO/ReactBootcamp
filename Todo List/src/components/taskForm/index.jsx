import React, { useState } from "react";
import { useTask } from "../../context/TaskContext";

const TaskForm = () => {
  const [taskname, setDataTask] = useState('')
  const { createTasks, isAdding } = useTask()

  const handleSubmit  = async (e) => {
    e.preventDefault();
    createTasks(taskname)
    setDataTask("")
  };

  return (
    <div>
      <form 
        className="flex items-center gap-4 w-full"
        onSubmit={handleSubmit}>
        <input
          className="border-b-2 w-[320px] px-4 py-2 outline-none "
          type="text"
          name="taskname"
          placeholder="Write a task name"
          value={taskname}
          onChange={(e) => setDataTask(e.target.value)}
        />
        <button 
          className="px-4 py-2 border-2 text-primary-900 rounded-xl font-semibold transition-colors"
          disabled={isAdding} 
          type="submit">
          {isAdding ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
