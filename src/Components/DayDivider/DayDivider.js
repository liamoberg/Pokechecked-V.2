import React, { Component } from "react";
import "./DayDivider.css";

class DayDivider extends Component {

  // constructor() {
  //   super();
  //   this.state = { data: [] };
  // }

  // componentDidMount() {
  //   // console.log(this.props.day);

  //   let newDate = this.props.day;

  //   console.log(newDate);


  //   newDate = newDate.slice(0, -7);

  //   console.log(newDate);

  //   this.setState({ data: newDate });
  //   // for (let i = 0; i < this.props.day; i++) {
  //   //   console.log('hek');
  //   //   // let date = this.props[i].day;
  //   //   // date = date.slice(0, -7);
  //   //   // console.log(date);
  //   // }

  //   console.log(this.state);
  // }

  render() {
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
