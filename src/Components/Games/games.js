import React, { Component } from "react";
import "./games.css";
import Logo1 from "../../Assets/images/sprite-large.png";
import Logo2 from "../../Assets/images/sprite-large-1.png";
import Playbtn from "../SVG components/playbtn";
import DayDivider from "../DayDivider/DayDivider";

class Games extends Component {
  render() {
    return (
      <div className="gameWrapper">
        {this.props.games.map(game => (
          <div className="game">
            <div className="hometeam">
              <img src={Logo1} alt="123" />
              <span>{game.homeTeam}</span>
            </div>
            <div className="resultwrap">
              <Playbtn />
              <a href="#" className="standard-btn">
                Results
              </a>
            </div>
            <div className="awayteam">
              <img src={Logo2} alt="123" />
              <span>{game.awayTeam}</span>
            </div>
          </div>
        ))}
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
