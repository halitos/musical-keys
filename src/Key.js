import React from "react";
import Tone from "tone";

const Key = (props) => {
  return props.notes.map((p, index) => {
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
    var synth = new Tone.Synth().toMaster();

    synth.triggerAttackRelease(noteName, "8n");
  }
};

export default Key;
