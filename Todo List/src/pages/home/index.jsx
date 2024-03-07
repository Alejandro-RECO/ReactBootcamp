import React, { useState } from "react";
import { client } from "../../supabase/client";
import TaskForm from "../../components/taskForm";
import TaskList from "../../components/taskList";

import { RiLogoutCircleLine } from "react-icons/ri";

const Home = () => {
  const [showDone, setShowDone] = useState(false);

  const handleShowDone = () => {
    setShowDone(!showDone);
    // console.log(showDone);
  };

  return (
    <section className="h-screen flex flex-col items-center p-4 bg-primary-300">
        <div className="flex justify-between items-center w-[450px] mb-4 bg-primary-700 p-4 rounded-xl text-primary-50 shadow-md">
          <h1 className="text-xl font-semibold">Welcome to ToDo List</h1>
          <button 
            className="p-2 bg-primary-100/90 text-primary-900/90 rounded-xl font-semibold hover:bg-primary-100 hover:text-primary-900"
            onClick={() => client.auth.signOut()}>
              <RiLogoutCircleLine />
            </button>
        </div>
      <section className="w-[450px] bg-white p-4 pb-5 flex flex-col gap-4 items-center rounded-xl shadow-xl">
        <TaskForm />
        <header className="flex items-center w-full">
          <button 
            className="p-1 w-full  bg-primary-500/90 text-primary-50 rounded-xl font-semibold hover:bg-primary-500 hover:text-primary-50 transition-colors"
            onClick={() => handleShowDone()}>
              {
                showDone ? 'Completed tasks' : 'Tasks pending'
              }
            </button>
        </header>
        <TaskList showDone={showDone} />
      </section>
    </section>
  );
};

export default Home;
