import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddTodo from './AddTodo';
import { ADD_TODO } from '../../actions/todoActions';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('AddTodo Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      todos: [], 
    });
    store.dispatch = jest.fn();
  });

  test('renders AddTodo component', () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(/Enter a new todo/i);
    const submitButton = screen.getByText(/Add Todo/i);
    expect(inputElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
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

    expect(store.dispatch).toHaveBeenCalledWith({ type: ADD_TODO, payload: 'New Todo Item' });
  });

  test('clears the input field after adding a new todo', () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(/Enter a new todo/i);
    const submitButton = screen.getByText(/Add Todo/i);

    fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
    fireEvent.click(submitButton);

    expect(inputElement.value).toBe('');
  });
});
