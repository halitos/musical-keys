import React from "react";
import Tone from "tone";

const Key = (props) => {
  return props.scales.map((p, index) => {
    return (
      <button id={p} key={index} onClick={handleClick}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {p}
      </button>
    );
  });

  function handleClick(e) {
    let noteName = e.currentTarget.id;
    var synth = new Tone.Synth({
      oscillator: {
        type: "triangle8",
      },
      envelope: {
        attack: 2,
        decay: 10,
        sustain: 3.4,
        release: 8,
      },
    }).toMaster();

    synth.triggerAttackRelease(noteName, "8n");
  }
};

export default Key;
