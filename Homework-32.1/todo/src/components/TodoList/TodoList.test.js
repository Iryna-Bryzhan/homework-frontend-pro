import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import TodoList from '../TodoList/TodoList';
import rootReducer from '../../store/store'; 


const store = configureStore({ reducer: { todos: rootReducer } });

test('renders TodoList component', () => {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
  const titleElement = screen.getByText(/TODOS/i);
  expect(titleElement).toBeInTheDocument();
});

test('displays todos correctly', () => {
  const initialTodos = [{ id: 1, text: 'Sample Todo', completed: false }];
  store.dispatch({ type: 'ADD_TODO', payload: initialTodos[0] });
  
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
  
  const todoItem = screen.getByText(/Sample Todo/i);
  expect(todoItem).toBeInTheDocument();
});
