import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import AddTodo from '../AddTodo/AddTodo';
import todosReducer from '../../store/store';

const store = configureStore({ reducer: { todos: todosReducer } });

test('renders AddTodo component with correct title', () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
  const titleElement = screen.getByText(/TODO App/i);  // Тут треба відредагувати заголовок, якщо є
  expect(titleElement).toBeInTheDocument();
});

test('allows input of text and numbers in the input field', () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/Enter a new todo/i);
  fireEvent.change(inputElement, { target: { value: '123abc' } });
  expect(inputElement.value).toBe('123abc');
});

test('shows an error message when trying to add an empty todo', () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/Enter a new todo/i);
  const submitButton = screen.getByText(/Add Todo/i);
  
  fireEvent.click(submitButton);
  
  const errorMessage = screen.getByText(/Please enter a todo./i);
  expect(errorMessage).toBeInTheDocument();
});

test('adds a new todo item to the list when valid text is entered', () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/Enter a new todo/i);
  const submitButton = screen.getByText(/Add Todo/i);
  
  fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
  fireEvent.click(submitButton);
  
  const todoItem = screen.getByText(/New Todo Item/i);
  expect(todoItem).toBeInTheDocument();
});
