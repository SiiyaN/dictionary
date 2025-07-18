import React from "react";

export default function Definitions(props) {
  if (props.definitions) {
    return (
      <div className="Definitions">
        <h2>
          Definition for: <strong>{props.word}</strong>
        </h2>
        <p>{props.definitions[1].definition}</p>
      </div>
    );
  } else {
    return null;
  }
}
