import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default () => {
  const [counter, setCounter] = useState(0);

  /* Redux 'Connect' */
  const reduxState = useSelector(state => state);
  const reduxCounter = reduxState.counter;

  const dispatch = useDispatch();

  const handleClick = () => {
    setCounter(counter + 1);
    dispatch({ type: "INCREMENT" });
  };

  useEffect(() => {
    console.log("cambio counter");
  }, [counter]);

  return (
    <>
      <h2>
        {counter}
        {/*
        {reduxCounter}
        */}
      </h2>

      <button onClick={handleClick}>Incrementar con hook</button>
    </>
  );
};
