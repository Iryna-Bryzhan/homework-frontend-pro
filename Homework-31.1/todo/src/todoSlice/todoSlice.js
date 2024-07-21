import { createSlice } from "@reduxjs/toolkit";

const getTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const todosSlice = createSlice({
  name: "todos",
  initialState: getTodosFromLocalStorage(),
  reducers: {
    addTodoSuccess: (state, action) => {
      state.push(action.payload);
      saveTodosToLocalStorage(state);
    },
    removeTodoSuccess: (state, action) => {
      const updatedTodos = state.filter((todo) => todo.id !== action.payload);
      saveTodosToLocalStorage(updatedTodos);
      return updatedTodos;
    },
    markTodoCompleteSuccess: (state, action) => {
      const updatedTodos = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      saveTodosToLocalStorage(updatedTodos);
      return updatedTodos;
    },
    editTodoSuccess: (state, action) => {
      const updatedTodos = state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      saveTodosToLocalStorage(updatedTodos);
      return updatedTodos;
    },
    clearTodosSuccess: () => {
      saveTodosToLocalStorage([]);
      return [];
    },
  },
});

export const {
  addTodoSuccess,
  removeTodoSuccess,
  markTodoCompleteSuccess,
  editTodoSuccess,
  clearTodosSuccess,
} = todosSlice.actions;
export default todosSlice.reducer;
