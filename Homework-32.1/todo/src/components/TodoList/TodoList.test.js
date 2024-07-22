import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodoList from './TodoList';
import { markTodoComplete, removeTodo, editTodo } from '../../actions/todoActions';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('TodoList Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      todos: [
        { id: 1, text: 'Sample Todo 1', completed: false },
        { id: 2, text: 'Sample Todo 2', completed: true },
      ],
    });
    store.dispatch = jest.fn();
  });

  test('renders TodoList with todos', () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(screen.getByText('Sample Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Sample Todo 2')).toBeInTheDocument();
  });

  test('dispatches markTodoComplete action when TODO text is clicked', () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    fireEvent.click(screen.getByText('Sample Todo 1'));
    expect(store.dispatch).toHaveBeenCalledWith(markTodoComplete(1));
  });

  test('opens modal with current TODO text when edit button is clicked', () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const editButtons = screen.getAllByLabelText(/edit/i); 
    fireEvent.click(editButtons[0]); 
    expect(screen.getByDisplayValue('Sample Todo 1')).toBeInTheDocument();
  });

  test('dispatches removeTodo action when delete button is clicked', () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const deleteButtons = screen.getAllByLabelText(/delete/i); 
    fireEvent.click(deleteButtons[0]); 
    expect(store.dispatch).toHaveBeenCalledWith(removeTodo(1));
  });

  test('dispatches editTodo action with updated text when Save button is clicked', () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const editButtons = screen.getAllByLabelText(/edit/i);
    fireEvent.click(editButtons[0]);
    
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Updated Todo Text' } });
    fireEvent.click(screen.getByRole('button', { name: /save changes/i }));

    expect(store.dispatch).toHaveBeenCalledWith(editTodo({ id: 1, text: 'Updated Todo Text', completed: false }));
  });
});
