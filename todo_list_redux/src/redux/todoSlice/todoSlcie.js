import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        descript: action.payload.descript,
        done: false,
      };
      state.push(newTodo);
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);

      state[index].done = action.payload.done;
    },

    deletTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },

    deletAllTodos: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addTodo, toggleComplete, deletTodo, deletAllTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
