import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../todo/todoSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
export default store;
