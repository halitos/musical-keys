import React from "react";

const Scales = {
  pentatonic: ["A", "C4", "D4", "E4", "G4", "A4", "C5", "D5"],
  dorian: ["D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5"],
  blues: ["A3", "C4", "D4", "Eb4", "G4", "A4"],
};

const ToneOptions = (props) => {
  return (
    <select onChange={props.handleChange}>
      {Object.keys(Scales).map((s) => (
        <option id={s} value={s} key={s}>
          {s}
        </option>
      ))}
    </select>
  );
};

export default ToneOptions;
