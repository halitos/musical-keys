import React from "react";
import Key from "./Key";

const Keyboard = () => {
  return (
    <div className="keyboard">
      <Key notes={["A", "B", "C", "D", "E", "F", "G", "H"]} />
    </div>
  );
};

export default Keyboard;
