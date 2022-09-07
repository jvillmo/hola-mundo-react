import React from "react";

class Counter extends React.Component {
  render = () => {
    let count = this.props.counter;
    return <h1>{count}</h1>;
  };
}

export default Counter;
