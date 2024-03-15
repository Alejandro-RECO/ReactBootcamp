import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../todoSlice/todoSlcie'

export default configureStore({
  reducer: {
    todo: todoReducer
  }
})