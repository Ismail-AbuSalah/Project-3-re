import React from "react";

const GuessPeg = (props) => (
  <div className="component" style={{ backgroundColor: props.color, border: props.color ? `1px solid ${props.color}`:`1px dashed gery`  }}>
    {props.color}
  </div>
);

export default GuessPeg;
