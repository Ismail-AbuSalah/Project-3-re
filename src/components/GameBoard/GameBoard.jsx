import React from "react";
import GuessRow from "./../GuessRow/GuessRow";

const GameBoard = (props) => (
  <div className="component flex-h flex-rev-vertical ">
    GameBoard
    {props.guesses.map((guess, Idx) => (
      <GuessRow guess={guess} colors={props.colors} rowIdx={Idx} key={Idx} />
    ))}
  </div>
);

export default GameBoard;
