export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARK_TODO_COMPLETE = 'MARK_TODO_COMPLETE';
export const EDIT_TODO = 'EDIT_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const markTodoComplete = (id) => ({
  type: MARK_TODO_COMPLETE,
  payload: id,
});

export const editTodo = (todo) => ({
  type: EDIT_TODO,
  payload: todo,
});

export const clearTodos = () => ({
  type: CLEAR_TODOS,
});

