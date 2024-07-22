import { all } from 'redux-saga/effects';
import todosSaga from './todoSaga';

export default function* rootSaga() {
  yield all([
    todosSaga(),
  ]);
}
