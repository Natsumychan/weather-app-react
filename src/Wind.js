import React from "react";

import "./wind.css";

export default function Wind(props) {
  return <p className="wind-info">Wind: {props.wind} m/s</p>;
}