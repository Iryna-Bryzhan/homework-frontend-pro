import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../todoSlice/todoSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
