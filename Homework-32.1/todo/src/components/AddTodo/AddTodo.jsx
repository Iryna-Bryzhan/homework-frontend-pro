import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../actions/todoActions";
import Button from "react-bootstrap/Button";

function AddTodo() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: ADD_TODO, payload: text });
      setText("");
      setError("");
    } else {
      setError("Please enter a todo.");
    }
  };

  return (
  <div>
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <Button variant="primary" type="submit">
        Add Todo
      </Button>
    </form>
    {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default AddTodo;
