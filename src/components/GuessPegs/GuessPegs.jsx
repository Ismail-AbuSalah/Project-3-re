import React from "react";
import GuessPeg from "./../GuessPeg/GuessPeg";

const GuessPegs = (props) => (
  <div className="component flex-h">
    GuessPegs
    <GuessPeg
      color={props.colors[props.code[0]]}
      currentguess={props.currentguess}
    />
    <GuessPeg
      color={props.colors[props.code[1]]}
      currentguess={props.currentguess}
    />
    <GuessPeg
      color={props.colors[props.code[2]]}
      currentguess={props.currentguess}
    />
    <GuessPeg
      color={props.colors[props.code[3]]}
      currentguess={props.currentguess}
    />
  </div>
);

export default GuessPegs;
