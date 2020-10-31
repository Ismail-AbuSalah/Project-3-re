import React from "react";
import ScoreButton from "./../ScoreButton/ScoreButton";
import GuessPegs from "./../GuessPegs/GuessPegs";
import GuessScore from "./../GuessScore/GuessScore";

const GuessRow = (props) => (
  <div className="component flex-h">
    <div>{props.rowIdx + 1}</div>
    GuessRow
    <GuessPegs colors={props.colors} code={props.guess.code} />
    {props.currentguess ? <ScoreButton /> : <GuessScore />}
  </div>
);

export default GuessRow;
