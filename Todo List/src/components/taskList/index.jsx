import React, { useEffect } from "react";
import { useTask } from "../../context/TaskContext";
import TaskCard from "../taskCard";

const TaskList = ({showDone = false}) => {
  const { tasks, getTasks, loading } = useTask();

  // console.log("Tareas: ", tasks);

  useEffect(() => {
    getTasks(showDone);
  }, [showDone]);

  // console.log(tasks);

  function renderTasks (){
    if(loading){
      return <p>Loading...</p>
    }else if(tasks.length === 0){
      return <p>No tasks founds</p>
    }else{
      return (
        <div className="w-[320px] flex flex-col items-center gap-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      );
    }
  }

  return <div>
    {renderTasks()}
  </div>
};

export default TaskList;
