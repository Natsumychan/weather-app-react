import React from "react";
import Time from "./Time";
import WeatherStatus from "./WeatherStatus";

import "./city.css";

export default function City(props) {
  return (
    <>
      <h2>{props.info}</h2>
      <Time />
      <WeatherStatus city={props.info} />
    </>
  );
}