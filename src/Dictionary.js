import React, { useState } from "react";
import axios from "axios";
import Definitions from "./Definitions";
import "./Dictionary.css";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definitions, setDefinitions] = useState(null);
  let [phonetic, setPhonetic] = useState("");
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setDefinitions(response.data.meanings);
    setPhonetic(response.data.phonetic);
  }

  function handleImageResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "f063aad8tb9d2a804775off7e6bf14bb";
    let apiRrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiRrl).then(handleResponse);

    let imgApiKey = "f063aad8tb9d2a804775off7e6bf14bb";
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;
    axios.get(imgApiUrl).then(handleImageResponse);
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
      <Phonetics phonetic={phonetic} />
      <Synonyms definitions={definitions} />
      <Photos photos={photos} />
    </div>
  );
}
