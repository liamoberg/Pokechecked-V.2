import React, { Component } from "react";
import "./GoalieMatchup.css";
import Goalie1 from "../../Assets/images/goalie1.png";
import Goalie2 from "../../Assets/images/goalie2.png";
import Team1 from "../../Assets/images/team1.png";
import Team2 from "../../Assets/images/team2.png";

class GoalieMatchup extends Component {
  render() {
    return (
      <div className="goalie-container">
        <div className="home-goalie">
          <div className="img-wrap">
            <img className="team" src={Team1} />
            <img className="goalie" src={Goalie1} />
          </div>
          <span className="name">Linus Ullmark</span>
        </div>
        <div className="away-goalie">
          <div className="img-wrap">
            <img className="team" src={Team2} />
            <img className="goalie" src={Goalie2} />
          </div>
          <span className="name">Henrik Lundqvist</span>
        </div>
      </div>
    );
  }
}

export default GoalieMatchup;
