import React, { Component } from "react";
import "./Goalies.css";
import DayDivider from "../../DayDivider/DayDivider";
import GoalieMatchup from "../../GoalieMatchup/GoalieMatchup";

class Goalies extends Component {
  render() {
    return (
      <div className="gameday">
        <DayDivider />
        <div className="goalie-wrapper">
          <GoalieMatchup />
          <GoalieMatchup />
          <GoalieMatchup />
          <GoalieMatchup />
          <GoalieMatchup />
          <GoalieMatchup />
          <GoalieMatchup />
          <GoalieMatchup />
          <GoalieMatchup />
          <GoalieMatchup />
        </div>
      </div>
    );
  }
}

export default Goalies;
