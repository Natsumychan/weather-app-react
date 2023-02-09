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
    <>
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
    <p className="link-container"><a href="https://github.com/Natsumychan/weather-app-react" target="_blank"  rel="noopener noreferrer">Open-source code</a>, by <a href="https://www.shecodes.io/graduates/55940-diana-castano" target="_blank"  rel="noopener noreferrer">Diana Castaño</a> for <a href="https://www.shecodes.io/" target="_blank"  rel="noopener noreferrer">Shecodes project</a></p>
    </>
  );
}