import { createContext, useContext, useState } from "react";
import { client } from "../supabase/client";

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);

  if (!context)
    throw new Error("useTask must be used whithin a TaskContextProvider");
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTask] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const getTasks = async (done = false) => {
    setLoading(true);
    const user = await client.auth.getUser();
    const userId = user.data.user.id;
    const { error, data } = await client
      .from("tasks")
      .select()
      .eq("user_id", userId)
      .eq("done", done);

    if (error) throw new Error("ERROR: ", error);

    setTask(data);

    setLoading(false);
    // console.log('Result: ', result);
  };

  const createTasks = async (taskName) => {
    setIsAdding(true);
    try {
      const user = await client.auth.getUser();

      const { error, data } = await client
        .from("tasks")
        .insert({
          name: taskName,
          user_id: user.data.user.id,
        })
        .select();

      if (error) throw new error("new error", error);

      setTask([...tasks, ...data]);

      // console.log(data);
    } catch (e) {
      console.error("ERROR: ", e);
    } finally {
      setIsAdding(false);
    }
  };

  const deleteTasks = async (id) => {
    const user = await client.auth.getUser();
    const userId = user.data.user.id;

    const { error, data } = await client
      .from("tasks")
      .delete()
      .eq("user_id", userId)
      .eq("id", id);

    if (error) throw new error("new error", error);

    setTask(tasks.filter((tasks) => tasks.id !== id));

    // console.log(data);
  };

  const updateTask = async (id, updateFields) => {
    const user = await client.auth.getUser();
    const userId = user.data.user.id;

    const { error, data } = await client
      .from("tasks")
      .update(updateFields)
      .eq("user_id", userId)
      .eq("id", id);

    if (error) throw new error("new error", error);
    setTask(
      tasks.filter(tasks => tasks.id !== id)

    )
    // console.log(data);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        isAdding,
        loading,
        getTasks,
        createTasks,
        deleteTasks,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
