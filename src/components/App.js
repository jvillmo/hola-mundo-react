import React from "react";
import HolaMundo from "./holamundo";
import TodoList from "./todo";
import Counter from "./counter";
import ReduxCounter from "./connectedCounter";
import ConterWithHooks from "./counterWithHooks";

import MovieList from "./movieList";

import { connect } from "react-redux";

import "../css/styles.css";

import CounterHook from "./counterHook";

class App extends React.Component {
  state = {
    list: ["a", "b"],
    counter: 100
  };

  handleAgregarClick = () => {
    console.log("agregar");

    let newTodo = prompt("Nueva tarea");
    if (newTodo) {
      this.setState({
        list: [...this.state.list, newTodo]
      });
    }
  };

  handleIncrementarClick = () => {
    console.log("incrementar");
    let counter = this.state.counter;

    this.setState({
      counter: counter + 1
    });

    console.log("counter", this.state.counter);
    this.props.increment();
  };

  render = () => {
    return (
      <div className="App">
        <MovieList />
        {/*
        <HolaMundo />
        <ConterWithHooks />
        <ReduxCounter />
        <button onClick={this.handleIncrementarClick}>incrementar</button>
        <Counter counter={this.state.counter} />
        <CounterHook counter={this.state.counter} />
        <h2>{this.state.counter}</h2>
        <TodoList list={this.state.list} />
        <ul>
        <li>
        <button onClick={this.handleAgregarClick}>agregar</button>
        </li>
        <li>
        </li>
        </ul>
      */}
      </div>
    );
  };
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: `INCREMENT` }),
    decrement: () => dispatch({ type: `DECREMENT` })
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
