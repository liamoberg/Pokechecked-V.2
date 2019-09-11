import React, { Component } from "react";
import "./DayDivider.css";

const DayDivider = ({ day }) => (
  <div className="wrap">
    <span className="date">{day}</span>
  </div>
);
// class DayDivider extends Component {
//   render() {
//     return (
//       <div className="divider">
//         <span className="date">{this.props.day}</span>
//         <div className="line" />
//         <a href="#" className="standard-btn">
//           Results
//         </a>
//       </div>
//     );
//   }
// }

export default DayDivider;
