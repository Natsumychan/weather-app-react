import React, { useState } from "react";
import City from "./City";

import "./search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [text, setText] = useState("");
  function searchCity(event) {
    event.preventDefault();
    setText(`${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search for a city"
          onChange={updateCity}
        />
        <input
          type="submit"
          className="btn btn-primary"
          value="Search"
          onClick={searchCity}
        />
      </div>
      <City info={text} />
    </div>
  );
}