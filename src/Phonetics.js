import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetc.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>
      <br />
      {props.phonetc.text}
    </div>
  );
}
