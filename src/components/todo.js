import React from "react";

class TodoList extends React.Component {
  render = () => {
    let props = this.props;
    console.log("props", props);
    return (
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
}

export default TodoList;
