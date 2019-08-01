import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };
  static defaultProps = {
    step: 1
  };

  handleButtonClick = () => {
    const newCount = this.state.count + this.props.step;
    this.setState({
      count: newCount
    });
  };

  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Add {this.props.step}</button>
      </div>
    );
  }
}

export default Counter;
