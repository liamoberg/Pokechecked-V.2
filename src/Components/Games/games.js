import React, { Component } from "react";
import "./games.css";
import Logo1 from "../../Assets/images/sprite-large.png";
import Logo2 from "../../Assets/images/sprite-large-1.png";
import VideoOverlay from "../VideoOverlay/VideoOverlay";
import GameResult from "../GameResult/GameResult";

class Games extends Component {
  state = {
    showResult: false
  };

  showResult() {
    if (!this.state.showResult === true) {
      this.setState({ showResult: true });
    } else {
      this.setState({ showResult: false });
    }
  }

  // Implement another method
  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        showResult: nextProps.showAllResults
      });
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
              stars={this.props.games.stars}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Games;
