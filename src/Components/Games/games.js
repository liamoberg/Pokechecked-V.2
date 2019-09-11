import React, { Component } from "react";
import "./games.css";
import Logo1 from "../../Assets/images/sprite-large.png";
import Logo2 from "../../Assets/images/sprite-large-1.png";
import VideoOverlay from "../VideoOverlay/VideoOverlay";
import GameResult from "../GameResult/GameResult";
import DayDivider from "../DayDivider/DayDivider";

class Games extends Component {
  state = {
    showResult: false
  };

  componentWillReceiveProps() {
    if (this.props.showAllResults === true) {
      this.setState({ showResult: true });
    } else {
      this.setState({ showResult: false });
    }
  }

  showResult() {
    if (!this.state.showResult === true) {
      this.setState({ showResult: true });
    } else {
      this.setState({ showResult: false });
    }
  }

  render() {
    return (
      <div className="game">
        <div className="top">
          <div className="hometeam">
            <img src={Logo1} alt="123" />
            <span>{this.props.games.homeTeam}</span>
          </div>
          <div className="resultwrap">
            <a href="#">
              <VideoOverlay url={this.props.games.url} />
            </a>
            <div
              className={`standard-btn ${
                this.state.showResult ? "active" : ""
              }`}
              onClick={() => {
                this.showResult();
              }}
            >
              {this.state.showResult ? "Hide" : "Results"}
            </div>
          </div>
          <div className="awayteam">
            <img src={Logo2} alt="123" />
            <span>{this.props.games.awayTeam}</span>
          </div>
        </div>
        <div className="bottom">
          {this.state.showResult && (
            <GameResult
              homeTeamScore={this.props.games.homeGoals}
              awayTeamScore={this.props.games.awayGoals}
              scorers={this.props.games.scorers}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Games;

// {
//   this.state.data.map((highlight, index) => {
//     return (
//       <div>
//         <DayDivider day={highlight.day} />
//         <Games games={highlight.games} />
//       </div>
//     );
//   });
// }
