import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counter/counterAction";
import "./index.css";

function App() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>Value: {count}</h1>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

export default App;
