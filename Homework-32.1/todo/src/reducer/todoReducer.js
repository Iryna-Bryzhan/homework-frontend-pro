import { ADD_TODO, REMOVE_TODO, MARK_TODO_COMPLETE, EDIT_TODO, CLEAR_TODOS } from '../actions/todoActions';

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const initialState = {
    todos: [], 
  };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { id: Date.now(), text: action.payload, completed: false };
      const newTodosAdd = [...state.todos, newTodo];
      saveTodosToLocalStorage(newTodosAdd);
      return { ...state, todos: newTodosAdd };

    case REMOVE_TODO:
      const newTodosRemove = state.todos.filter(todo => todo.id !== action.payload);
      saveTodosToLocalStorage(newTodosRemove);
      return { ...state, todos: newTodosRemove };

    case MARK_TODO_COMPLETE:
      const newTodosToggle = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      saveTodosToLocalStorage(newTodosToggle);
      return { ...state, todos: newTodosToggle };

    case EDIT_TODO:
      const newTodosEdit = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
      saveTodosToLocalStorage(newTodosEdit);
      return { ...state, todos: newTodosEdit };

    case CLEAR_TODOS:
      saveTodosToLocalStorage([]);
      return { ...state, todos: [] };

    default:
      return state;
  }
};

export default todoReducer;
