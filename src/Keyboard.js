import React from "react";
import Key from "./Key";

const Keyboard = () => {
  const arr = ["A3", "C4", "D4", "E4", "G4", "A4", "C5"];
  return (
    <div className="keyboard">
      <Key notes={arr} />
    </div>
  );
};

export default Keyboard;
