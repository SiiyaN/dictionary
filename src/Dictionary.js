import React, { useState } from "react";
import axios from "axios";
import Definitions from "./Definitions";
import "./Dictionary.css";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definitions, setDefinitions] = useState(null);
  let [phonetics, setPhonetics] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setDefinitions(response.data.meanings);
    setPhonetics(response.data.phonetics);
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
      <Synonyms definitions={definitions} />
      <Phonetics phonetics={phonetics} />
    </div>
  );
}
