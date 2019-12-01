import React, { useState, useEffect } from "react";
import "./games.css";
import Logo1 from "../../Assets/images/sprite-large.png";
import Logo2 from "../../Assets/images/sprite-large-1.png";
import SpriteBig from "../../Assets/images/sprite-big.png";
import VideoOverlay from "../VideoOverlay/VideoOverlay";
import GameResult from "../GameResult/GameResult";
import { StandardButton } from "../../Assets/Buttons.js";

function Games(props) {
  const [showResult, toggleResult] = useState(props.showAllResults);

  const GetSpritePos = TeamName => {
    switch (TeamName) {
      case "New Jersey Devils":
        return { bgPos: "-0px -1000px", bgSize: "100px 3100px" };
      case "Edmonton Oilers":
        return { bgPos: "-0px -1800px", bgSize: "100px 3100px" };
      case "Dallas Stars":
        return { bgPos: "-0px -800px", bgSize: "100px 3100px" };
      case "Winnipeg Jets":
        return { bgPos: "-0px -2900px", bgSize: "-0px -2900px" };
      case "Buffalo Sabres":
        return { bgPos: "-0px -2300px", bgSize: "-0px -2900px" };
      case "New York Rangers":
        return { bgPos: "-0px -2200px", bgSize: "-0px -2900px" };
      case "Toronto Maple Leafs":
        return { bgPos: "-0px -2600px", bgSize: "-0px -2900px" };
      case "Ottawa Senators":
        return { bgPos: "-0px -1900px", bgSize: "-0px -2900px" };
      case "Tampa Bay Lightning":
        return { bgPos: "-0px -2500px", bgSize: "-0px -2900px" };
      case "Florida Panthers":
        return { bgPos: "-0px -1200px", bgSize: "-0px -2900px" };
      case "New York Islanders":
        return { bgPos: "-0px -1400px", bgSize: "-0px -2900px" };
      case "Nashville Predators":
        return { bgPos: "-0px -1700px", bgSize: "-0px -2900px" };
      case "Pittsburgh Penguins":
        return { bgPos: "-0px -2000px", bgSize: "-0px -2900px" };
      case "Montréal Canadiens":
        return { bgPos: "-0px -300px", bgSize: "-0px -2900px" };
      case "St. Louis Blues":
        return { bgPos: "-0px -1600px", bgSize: "-0px -2900px" };
      case "Chicago Blackhawks":
        return { bgPos: "-0px -100px", bgSize: "100px 3100px" };
      case "Minnesota Wild":
        return { bgPos: "-0px -2800px", bgSize: "100px 3100px" };
      case "Vegas Golden Knights":
        return { bgPos: "-0px -3000px", bgSize: "-0px -2900px" };
      case "Arizona Coyotes":
        return { bgPos: "-0px -700px", bgSize: "-0px -2900px" };
      case "Anaheim Ducks":
        return { bgPos: "-0px -1100px", bgSize: "-0px -2900px" };
      case "Colorado Avalanche":
        return { bgPos: "-0px -500px", bgSize: "-0px -2900px" };
      case "Philadelphia Flyers":
        return { bgPos: "-0px -2100px", bgSize: "-0px -2900px" };
      case "Calgary Flames":
        return { bgPos: "-0px -200px", bgSize: "-0px -2900px" };
      case "Vancouver Canucks":
        return { bgPos: "-0px -2700px", bgSize: "-0px -2900px" };
      case "Carolina Hurricanes":
        return { bgPos: "-0px -1300px", bgSize: "-0px -2900px" };
      case "Los Angeles Kings":
        return { bgPos: "-0px 0", bgSize: "-0px -2900px" };
      case "Detroit Red Wings":
        return { bgPos: "-0px -900px", bgSize: "-0px -2900px" };
      case "Boston Bruins":
        return { bgPos: "-0px -1500px", bgSize: "-0px -2900px" };
      case "San Jose Sharks":
        return { bgPos: "-0px -2400px", bgSize: "-0px -2900px" };
      case "Columbus Blue Jackets":
        return { bgPos: "-0px -600px", bgSize: "-0px -2900px" };
      case "Washington Capitals":
        return { bgPos: "-0px -400px", bgSize: "-0px -2900px" };
      default:
        return { bgPos: "-0px 200px", bgSize: "100px 3100px" };
    }
  };

  useEffect(() => {
    toggleResult(props.showAllResults);
  }, [props.showAllResults]);

  return (
    <div className="game">
      <div className="top">
        <div className="hometeam">
          <div
            className="team-logo"
            style={{
              backgroundPosition: GetSpritePos(props.games.homeTeam).bgPos
            }}
          ></div>
          <span>{props.games.homeTeam}</span>
        </div>
        <div className="resultwrap">
          <a href="#">
            <VideoOverlay url={props.games.url} />
          </a>
          <StandardButton
            active={showResult ? true : false}
            onClick={() => toggleResult(!showResult)}
          >
            {showResult ? "Hide" : "Results"}
          </StandardButton>
          {/* <div
            className={`standard-btn ${showResult ? "active" : ""}`}
            onClick={() => toggleResult(!showResult)}
          >
            {showResult ? "Hide" : "Results"}
          </div> */}
        </div>
        <div className="awayteam">
          <div
            className="team-logo"
            style={{
              backgroundPosition: GetSpritePos(props.games.awayTeam).bgPos
            }}
          ></div>
          <span>{props.games.awayTeam}</span>
        </div>
      </div>
      <div className="bottom">
        {showResult && (
          <GameResult
            homeTeamScore={props.games.homeGoals}
            awayTeamScore={props.games.awayGoals}
            scorers={props.games.scorers}
            stars={props.games.stars}
          />
        )}
      </div>
    </div>
  );
}

// class Games extends Component {
//   state = {
//     showResult: false
//   };

//   showResult() {
//     if (!this.state.showResult === true) {
//       this.setState({ showResult: true });
//     } else {
//       this.setState({ showResult: false });
//     }
//   }

//   // Implement another method
//   componentWillReceiveProps(nextProps) {
//     if (this.props !== nextProps) {
//       this.setState({
//         showResult: nextProps.showAllResults
//       });
//     }
//   }

//   render() {
//     return (
//       <div className="game">
//         <div className="top">
//           <div className="hometeam">
//             <img src={Logo1} alt="123" />
//             <span>{this.props.games.homeTeam}</span>
//           </div>
//           <div className="resultwrap">
//             <a href="#">
//               <VideoOverlay url={this.props.games.url} />
//             </a>
//             <div
//               className={`standard-btn ${
//                 this.state.showResult ? "active" : ""
//               }`}
//               onClick={() => {
//                 this.showResult();
//               }}
//             >
//               {this.state.showResult ? "Hide" : "Results"}
//             </div>
//           </div>
//           <div className="awayteam">
//             <img src={Logo2} alt="123" />
//             <span>{this.props.games.awayTeam}</span>
//           </div>
//         </div>
//         <div className="bottom">
//           {this.state.showResult && (
//             <GameResult
//               homeTeamScore={this.props.games.homeGoals}
//               awayTeamScore={this.props.games.awayGoals}
//               scorers={this.props.games.scorers}
//               stars={this.props.games.stars}
//             />
//           )}
//         </div>
//       </div>
//     );
//   }
// }

export default Games;
