import React from "react";

import "./temperature.css";

export default function Temperature(props) {
  return (
    <p className="temp-number">
      {props.temp}{" "}
      <sup>
        <span>°C</span>|<span>°F</span>
      </sup>
    </p>
  );
}