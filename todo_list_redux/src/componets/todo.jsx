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
    <li className=" border px-3 py-2 flex flex-col justify-center rounded-md shadow-md gap-2">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-x-2">
          <input className="form-checkbox text-black h-4 w-4 bg-gray-300 checked:bg-black indeterminate:bg-gray-300" type="checkbox" checked={done} onChange={handleCompleteCLick} />
          <h2 className="text font-semibold uppercase">{title}</h2>
        </div>
        <button className="bg-gray-900/90 text-white/90 hover:bg-gray-900 hover:text-white py-1 px-3 rounded-md transition-colors" onClick={handleDelectClick}> Delet</button>
      </div>
      <p className="py-2 px-4 bg-gray-100 rounded-md shadow-md">{descript}</p>
    </li>
  );
};

export default Todo;
