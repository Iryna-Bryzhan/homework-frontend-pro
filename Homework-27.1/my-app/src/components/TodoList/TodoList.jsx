import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    return storedTodos;
  });
  // const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

   {/* Так було до використання Formik */}
   
  //   const addTodo = () => {
  //     if (newTodo.trim()) {
  //       const newTodoItem = { id: Date.now(), text: newTodo };
  //       setTodos([...todos, newTodoItem]);
  //       setNewTodo('');
  //     }
  //   };

  const addTodo = (values, { resetForm }) => {
    const newTodoItem = { id: Date.now(), text: values.newTodo };
    setTodos([...todos, newTodoItem]);
    resetForm();
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  const updateTodo = () => {
    setTodos(
      todos.map((todo) => (todo.id === currentTodo.id ? currentTodo : todo))
    );
    setIsEditing(false);
    setCurrentTodo({});
  };

  const closeModal = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  const validationSchema = Yup.object().shape({
    newTodo: Yup.string()
      .min(5, "Завдання повинно містити не менше 5 символів")
      .required("Це поле є обов'язковим"),
  });

  const editValidationSchema = Yup.object().shape({
    editTodo: Yup.string()
      .min(5, "Завдання повинно містити не менше 5 символів")
      .required("Це поле є обов'язковим"),
  });

  return (
    <div>

    {/* Так було до використання Formik */}

      {/* <input
      className='input-todo'
        type="text"
        placeholder='Ваше завдання'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className='button-todo' onClick={addTodo}>Додати</button>
      <ul className='list'>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <div className='buttons'> 
            <button onClick={() => editTodo(todo)}>Редагувати</button> 
            <button onClick={() => deleteTodo(todo.id)}>Видалити</button>
            </div>
          </li>
        ))}
      </ul> */}

      <Formik
        initialValues={{ newTodo: "" }}
        validationSchema={validationSchema}
        onSubmit={addTodo}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              className="input-todo"
              name="newTodo"
              type="text"
              placeholder="Ваше завдання"
            />
            <button className="button-todo" type="submit">
              Додати
            </button>

            <ErrorMessage name="newTodo" component="div" className="error" />
          </Form>
        )}
      </Formik>

      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <div className="buttons">
              <button onClick={() => editTodo(todo)}>Редагувати</button>
              <button onClick={() => deleteTodo(todo.id)}>Видалити</button>
            </div>
          </li>
        ))}
      </ul>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <Formik
              initialValues={{ editTodo: currentTodo.text }}
              validationSchema={editValidationSchema}
              onSubmit={(values) => updateTodo(values)}
            >
              {({ setFieldValue }) => (
                <Form>
                  <Field
                    type="text"
                    name="editTodo"
                    className="input-todo"
                    onChange={(e) => {
                      setFieldValue("editTodo", e.target.value);
                      setCurrentTodo({ ...currentTodo, text: e.target.value });
                    }}
                  />
                  <button type="submit">Оновити</button>

                  <ErrorMessage
                    name="editTodo"
                    component="div"
                    className="error"
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
