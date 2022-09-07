import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  render = () => {
    let count = this.props.counter;
    return <h1>{count}</h1>;
  };
}
const mapStateToProps = ({ counter }) => {
  return { counter };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: `INCREMENT` }),
    decrement: () => dispatch({ type: `DECREMENT` })
  };
};

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default ConnectedCounter;
