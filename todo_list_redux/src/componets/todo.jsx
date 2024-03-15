import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deletTodo } from "../redux/todoSlice/todoSlcie";

const Todo = ({ id, title, descript, done }) => {
  const dispatch = useDispatch();

  const handleCompleteCLick = () => {
    dispatch(
      toggleComplete({
        id: id,
        done: !done,
      })
    );
  };

  const handleDelectClick = () => {
    dispatch(
      deletTodo({
        id: id,
      })
    );
  };

  return (
    <li>
      <input type="checkbox" checked={done} onChange={handleCompleteCLick} />

      <h2>{title}</h2>
      <p>{descript}</p>
      <button onClick={handleDelectClick}> Delet</button>
    </li>
  );
};

export default Todo;
