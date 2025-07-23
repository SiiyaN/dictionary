import React from "react";

export default function Phonetics(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetics">
        <p>{props.phonetic}</p>
      </div>
    );
  } else {
    return null;
  }
}
