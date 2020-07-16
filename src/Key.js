import React from "react";

const Key = ({ notes }) => {
  return notes.map((p, index) => {
    return <button key={index}>{p}</button>;
  });
};

export default Key;
