import React, { useState } from "react";

const scales = {
  pentatonic: ["A", "C4", "D4", "E4", "G4", "A4", "C5", "D5"],
  dorian: ["D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5"],
  blues: ["A3", "C4", "D4", "Eb4", "G4", "A4"],
};

const SelectScale = () => {
  const [scale, setScale] = useState(scales.pentatonic);

  let newScale;

  const handleChange = (event) => {
    newScale = event.target.value;
    console.log(newScale);
    setScale(scales.newScale);
    console.log(scale);
  };

  return (
    <select onChange={handleChange}>
      {Object.keys(scales).map((s) => (
        <option id={s} value={s} key={s}>
          {s}
        </option>
      ))}
    </select>
  );
};

export default SelectScale;
