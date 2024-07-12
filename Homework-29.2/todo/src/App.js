import React from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoCount from './components/TodoCount/TodoCount';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="app">
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
      <TodoCount />
    </div>
  );
}

export default App;