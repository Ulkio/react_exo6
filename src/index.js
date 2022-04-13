import React from "react";
import ReactDOM from "react-dom";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          width: this.props.size,
          height: this.props.size,
          backgroundColor: "blue",
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2em",
        }}
      >
        <p style={{ color: "white" }}>{this.props.number}</p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nbr: 4,
      size: 100,
      numArray: [],
    };
  }

  componentDidMount() {
    this.generateCells();
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateCells = () => {
    let arrayRandoms = [];
    for (let i = 0; i < this.state.nbr * this.state.nbr; i++) {
      if (i < 10) {
        arrayRandoms.push(i);
      } else {
        arrayRandoms.push("");
      }
    }

    arrayRandoms.sort(() => 0.5 - Math.random());

    this.setState({ numArray: arrayRandoms });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Code secret</h1>
        <button onClick={this.generateCells}>Reset</button>
        <div
          style={{
            width: this.state.nbr * this.state.size + 25,
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {this.state.numArray.map((num, index) => {
            return <Square key={index} size={this.state.size} number={num} />;
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
