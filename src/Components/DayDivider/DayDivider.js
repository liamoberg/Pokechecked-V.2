import React, { Component } from "react";
import "./DayDivider.css";

class DayDivider extends Component {
  render() {
    console.log("44444", this.props.data);
    return (
      <div className="divider">
        <span className="date">{this.props.day}</span>
        <div className="line" />
        <a href="#" className="standard-btn">
          Results
        </a>
      </div>
    );
  }
}

export default DayDivider;
