import React from "react";
import GuessPegs from "./GuessPegs/GuessPegs";
import GuessScore from "./GuessScore/GuessScore";

const GuessRow = (props) => (
  <div className="component">
    GuessRow
    <GuessPegs />
    <GuessScore />
  </div>
);

export default GuessRow;
