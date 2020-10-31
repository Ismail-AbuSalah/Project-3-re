import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import GameTimer from "./components/GameTimer/GameTimer";
import NewGameButton from "./components/NewGameButton/NewGameButton";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React MasterMind</header>
        <GameBoard />
        <ColorPicker />
        <GameTimer />
        <NewGameButton />
        <Footer />
      </div>
    );
  }
}

// export default App;
