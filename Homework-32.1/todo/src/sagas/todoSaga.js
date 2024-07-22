import { call, put, takeEvery } from 'redux-saga/effects';
import { addTodoSuccess, removeTodoSuccess, markTodoCompleteSuccess, editTodoSuccess, clearTodosSuccess } from '../todoSlice/todoSlice';
import { ADD_TODO, REMOVE_TODO, MARK_TODO_COMPLETE, EDIT_TODO, CLEAR_TODOS } from '../actions/todoActions';

const api = {
  addTodo: (todo) => Promise.resolve(todo),
  removeTodo: (id) => Promise.resolve(id),
  markTodoComplete: (id) => Promise.resolve(id),
  editTodo: (todo) => Promise.resolve(todo),
  clearTodos: () => Promise.resolve([]),
};

function* addTodoSaga(action) {
  const newTodo = yield call(api.addTodo, { id: Date.now(), text: action.payload });
  yield put(addTodoSuccess(newTodo));
}

function* removeTodoSaga(action) {
  const id = yield call(api.removeTodo, action.payload);
  yield put(removeTodoSuccess(id));
}

function* markTodoCompleteSaga(action) {
  const id = yield call(api.markTodoComplete, action.payload);
  yield put(markTodoCompleteSuccess(id));
}

function* editTodoSaga(action) {
  const updatedTodo = yield call(api.editTodo, action.payload);
  yield put(editTodoSuccess(updatedTodo));
}

function* clearTodosSaga() {
  yield call(api.clearTodos);
  yield put(clearTodosSuccess());
}

function* todosSaga() {
  yield takeEvery(ADD_TODO, addTodoSaga);
  yield takeEvery(REMOVE_TODO, removeTodoSaga);
  yield takeEvery(MARK_TODO_COMPLETE, markTodoCompleteSaga);
  yield takeEvery(EDIT_TODO, editTodoSaga);
  yield takeEvery(CLEAR_TODOS, clearTodosSaga);
}

export default todosSaga;
