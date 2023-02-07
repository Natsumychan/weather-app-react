import React, { useState } from "react";
import axios from "axios";
import WeatherImg from "./WeatherImg";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Wind from "./Wind";

import "./weatherstatus.css";

export default function WeatherStatus(props) {
  if (props.city) {
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=te60b41a5ebo3808074c9edaf83940fc&units=metric`;
    let [status, setStatus] = useState(" ");
    let [image, setImg] = useState(" ");
    let [temperature, setTemperature] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [wind, setWind] = useState(null);
    axios.get(url).then(showTemperature);
    function showTemperature(response) {
      setStatus(response.data.condition.description);
      setImg(response.data.condition.icon_url);
      setTemperature(response.data.temperature.current);
      setHumidity(response.data.temperature.humidity);
      setWind(response.data.wind.speed);
    }
    return (
      <>
        <p className="weather-s">{status}</p>
        <div className="weather-container">
          <div className="temp-container">
            <WeatherImg image={image} />
            <Temperature temp={Math.round(temperature)} />
          </div>
          <div>
            <Humidity humidity={Math.round(humidity)} />
            <Wind wind={Math.round(wind)} />
          </div>
        </div>
      </>
    );
  }
}