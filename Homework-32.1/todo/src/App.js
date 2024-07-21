import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoCount from "./components/TodoCount/TodoCount";
import TodoList from "./components/TodoList/TodoList";
import { clearTodos } from "./actions/todoActions";
import Button from "react-bootstrap/Button";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>TODO App</h1>
      <AddTodo />
      <TodoList />
      <TodoCount />
      <Button variant="secondary" onClick={() => dispatch(clearTodos())}>
        Clear Todos
      </Button>
    </div>
  );
}

export default App;
