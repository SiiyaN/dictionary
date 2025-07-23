import React from "react";

export default function Definitions(props) {
  if (props.definitions && props.definitions.length > 0) {
    const firstMeaning = props.definitions[1];

    return (
      <div className="Definitions">
        Definition for <strong>{props.word}</strong>
        <p>
          <strong>{firstMeaning.partOfSpeech}</strong>:{" "}
          {firstMeaning.definition}
        </p>
        {firstMeaning.example && (
          <p className="example">Example: "{firstMeaning.example}"</p>
        )}
      </div>
    );
  } else {
    return null;
  }
}
