import React, { Component } from "react";
import "./Scorers.css";

class Scorers extends Component {
  state = {
    homeGoal: this.props.scorers.homeTeamScored
  };
  render() {
    return (
      <div className="item">
        <div className="left">
          {this.state.homeGoal && (
            <div className="wrap">
              <span>{this.props.scorers.scorer.player.fullName}</span>
              <div className="assists">
                {this.props.scorers.assist.map(ass => (
                  <span>
                    {ass.player.fullName} ({ass.personInfo.primaryNumber})
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="time">
          <span>{this.props.scorers.time}</span>
          <span>{this.props.scorers.period}</span>
        </div>
        <div className="right">
          {!this.state.homeGoal && (
            <div className="wrap">
              <span>{this.props.scorers.scorer.player.fullName}</span>
              <div className="assists">
                {this.props.scorers.assist.map(ass => (
                  <span>
                    {ass.player.fullName} ({ass.personInfo.primaryNumber})
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Scorers;
