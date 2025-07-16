import React from "react";

export default function Synonyms(props) {
  if (props.definitions && props.definitions[1].synonyms) {
    return (
      <div className="Synonyms">
        <h2>
          <strong>Synonyms:</strong>
        </h2>
        <p>{props.definitions[1].synonyms.join(", ")}</p>
      </div>
    );
  } else {
    return null;
  }
}
