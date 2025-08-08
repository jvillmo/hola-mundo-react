import React, { useState } from "react";
import HolaMundo from "./holamundo";
import TodoList from "./todo";
import Counter from "./counter";
import ReduxCounter from "./connectedCounter";
import ConterWithHooks from "./counterWithHooks";

import MovieList from "./movieList";

import { useDispatch } from "react-redux";

import "../css/styles.css";

import CounterHook from "./counterHook";

export default function App() {
  const [list, setList] = useState(["a", "b"]);
  const [counter, setCounter] = useState(100);
  const dispatch = useDispatch();

  const handleAgregarClick = () => {
    const newTodo = prompt("Nueva tarea");
    if (newTodo) {
      setList([...list, newTodo]);
    }
  };

  const handleIncrementarClick = () => {
    setCounter(counter + 1);
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div className="App">
      <MovieList />
      {/*
      <HolaMundo />
      <ConterWithHooks />
      <ReduxCounter />
      <button onClick={handleIncrementarClick}>incrementar</button>
      <Counter counter={counter} />
      <CounterHook counter={counter} />
      <h2>{counter}</h2>
      <TodoList list={list} />
      <ul>
        <li>
          <button onClick={handleAgregarClick}>agregar</button>
        </li>
        <li></li>
      </ul>
      */}
    </div>
  );
}
