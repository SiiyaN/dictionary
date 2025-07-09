import React, { useState } from "react";
import axios from "axios";
import Definitions from "./Definitions";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definitions, setDefinitions] = useState(null);

  function handleResponse(response) {
    console.log(response.data.meanings);
    setDefinitions(response.data.meanings);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "f063aad8tb9d2a804775off7e6bf14bb";
    let apiRrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiRrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary text-center">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} autoFocus={true} />
      </form>

      <Definitions definitions={definitions} word={keyword} />
    </div>
  );
}
