import React, { useState } from "react";
import MovieList from "./movieList";
import HolaMundo from "./holamundo";
import TodoList from "./todo";
import Counter from "./counter";
import CounterHook from "./counterHook";
import CounterWithHooks from "./counterWithHooks";
import "../css/styles.css";

export default function App() {
  const [list, setList] = useState(["a", "b"]);
  const [counter, setCounter] = useState(100);

  const handleAgregarClick = () => {
    const newTodo = prompt("Nueva tarea");
    if (newTodo) {
      setList([...list, newTodo]);
    }
  };

  const handleIncrementarClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <MovieList />
      <HolaMundo />
      <CounterWithHooks />
      <button onClick={handleIncrementarClick}>incrementar</button>
      <Counter counter={counter} />
      <CounterHook counter={counter} />
      <h2>{counter}</h2>
      <TodoList list={list} />
      <ul>
        <li>
          <button onClick={handleAgregarClick}>agregar</button>
        </li>
      </ul>
    </div>
  );
}
