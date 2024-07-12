import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h2>TODOS</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
