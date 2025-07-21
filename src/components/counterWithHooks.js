import React, { useState, useEffect } from "react";

export default function CounterWithHooks() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("cambio counter");
  }, [counter]);

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Incrementar con hook</button>
    </>
  );
}
