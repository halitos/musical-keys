import React from "react";
import Tone from "tone";

const Key = (props) => {
  return props.notes.map((p, index) => {
    return (
      <button key={index} onClick={handleClick}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {p}
      </button>
    );
  });
  function handleClick(e) {
    //create a synth and connect it to the master output (your speakers)
    var synth = new Tone.Synth().toMaster();

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("D4", "8n");
    console.log("clicked");
  }
};

export default Key;
