import React from "react";
import { useSelector } from "react-redux";

function TodoCount() {
  const todos = useSelector((state) => state.todos);

  return (
    <footer>
      <p>Total: {todos.length}</p>
    </footer>
  );
}

export default TodoCount;
