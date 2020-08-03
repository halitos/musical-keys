import React, { useState } from "react";
import Key from "./Key";

const scales = {
  pentatonic: ["A3", "C4", "D4", "E4", "G4", "A4", "C5", "D5"],
  dorian: ["D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5"],
  blues: ["A3", "C4", "D4", "Eb4", "G4", "A4"],
};

const KeyBoard = () => {
  const [scale, setScale] = useState(scales.pentatonic);

  function handleChange(event) {
    const opt = event.target.selectedOptions;
    if (opt.length !== 1) {
      return;
    }
    let newScale = opt[0].value;
    console.log(newScale);
    setScale(scales[newScale]);
    console.log(scale);
  }

  return (
    <div>
      <div>
        <Key scales={scale} />
      </div>
      <select onChange={handleChange}>
        {Object.keys(scales).map((s) => (
          <option id={s} value={s} key={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default KeyBoard;
