import React from "react";
import Key from "./Key";

const Scales = {
  pentatonic: ["A3", "C4", "D4", "E4", "G4", "A4", "C5", "D5"],
  dorian: ["D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5"],
  blues: ["A3", "C4", "D4", "Eb4", "G4", "A4"],
};

const Keyboard = () => {
  return (
    <div className="keyboard">
      <Key notes={Scales.pentatonic} />
    </div>
  );
};

export default Keyboard;
