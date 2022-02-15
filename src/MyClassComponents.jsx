import { Component } from "react";

class MyClassComponent extends Component {
  constructor() {
    super(); /// dont be scared its just a method that we have to call it for inherited classes in able to use all methods in parent class

    console.log(this);

    this.state = {
      boolean: true,
      counter: 0,
      color: "red",
    };
  }

  increaseCounter = () => {
    // this.state ={counter : this.state.counter +1}

    console.log(this.state);

    this.setState((currentState) => {
      return {
        counter: currentState.counter + 1,
      };
    });
  };

  changeColor = () => {
    this.setState((currentState) => {
      return {
        color: currentState.color == "red" ? "blue" : "red",
        counter: currentState.counter + 10,
      };
    });

    console.log(this.state);
  };

  componentDidMount() {
    alert(
      "Page is loading for the first time ,but alert is happening before loading"
    );
  }

  componentDidUpdate() {
    alert("State changed thats why i am running ");
    console.log("updating state");
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }} onClick={this.changeColor}>
          {" "}
          {this.props.sentence} {this.state.counter}
        </h1>

        <button onClick={this.increaseCounter}>
          Class component counter
        </button>
      </div>
    );
  }
}

export default MyClassComponent;
