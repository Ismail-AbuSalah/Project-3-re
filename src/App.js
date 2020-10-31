import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import GameTimer from "./components/GameTimer/GameTimer";
import NewGameButton from "./components/NewGameButton/NewGameButton";

const colors = ["#7CCCE5", "#FDE47F", "#E0E47F", "#B576AD"];

export default class App extends Component {
  constructor() {
    // Must call super before accessing "this"
    super();
    // this.state will always be an object
    // Where the object has "state" properties
    this.state = {
      selColorIdx: 0,
      guesses: [this.getNewGuess(),this.getNewGuess()],
      code: this.genCode(),
    };
  }

  getNewGuess() {
    return {
      // code: [null, null, null, null],
      code: [3, 2, 1, 0],
      score: {
        perfect: 0,
        almost: 0,
      },
    };
  }

  genCode() {
    return new Array(4)
      .fill()
      .map(() => Math.floor(Math.random() * colors.length));
  }

  render() {
    return (
      <div className="App">
        <div>selected color : {colors[this.state.selColorIdx]}</div>
        <button
          onClick={() => {
            this.setState({ selColorIdx: ++this.state.selColorIdx % 4 });
            console.log(this.state.selColorIdx);
          }}
        >
          NextColor
        </button>
        <header className="App-header">React MasterMind</header>
        <div className="flex-h">
          <GameBoard colors={colors} guesses={this.state.guesses} />
          <div>
            <ColorPicker colors={colors} selColorIdx={this.state.selColorIdx} />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer className="component">Footer</footer>
      </div>
    );
  }
}

// export default App;
