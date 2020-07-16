import React from "react";
import Key from "./Key";

const Keyboard = () => {
  const arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
  return (
    <div className="keyboard">
      <Key notes={arr} />
    </div>
  );
};

export default Keyboard;
