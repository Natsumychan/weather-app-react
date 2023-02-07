import React from "react";

import "./WeatherImg";

export default function WeatherImg(props) {
  return <img src={props.image} alt="weather condition" />;
}