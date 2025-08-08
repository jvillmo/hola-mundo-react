import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ConnectedCounter() {
  const counter = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
