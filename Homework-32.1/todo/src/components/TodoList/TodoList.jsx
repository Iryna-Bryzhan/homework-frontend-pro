import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  markTodoComplete,
  editTodo,
} from "../../actions/todoActions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { PencilSquare, Trash, CheckCircle } from "react-bootstrap-icons";
import "../../index.css";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (todo) => {
    setCurrentTodo(todo);
    setEditText(todo.text);
    setShowModal(true);
  };

  const handleEditSave = () => {
    if (editText.trim()) {
      dispatch(editTodo({ ...currentTodo, text: editText }));
      setShowModal(false);
    }
  };

  return (
    <div>
      <h2>TODO List</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span
              onClick={() => dispatch(markTodoComplete(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <div className="todo-icons">
              <CheckCircle
                className="icon"
                onClick={() => dispatch(markTodoComplete(todo.id))}
              />
              <PencilSquare
                className="icon"
                onClick={() => handleEditClick(todo)}
              />
              <Trash
                className="icon"
                onClick={() => dispatch(removeTodo(todo.id))}
              />
            </div>
          </li>
        ))}
      </ul>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TodoList;
