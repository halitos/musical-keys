import React from "react";

const Key = (props) => {
  return props.notes.map((p, index) => {
    return <button key={index}>{p}</button>;
  });
};

export default Key;
