import React, { Component } from "react";
import "./DayDivider.css";

const DayDivider = ({ day }) => (
  <div className="wrap">
    <span className="date">{day}</span>
  </div>
);

export default DayDivider;
