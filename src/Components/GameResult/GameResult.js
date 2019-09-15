import React from "react";
import "./GameResult.css";
import Scorers from "../Scorers/Scorers";
import ThreeStars from "../Games/ThreeStars";

function GameResult(props) {
  return (
    <div className="result">
      <div className="score">
        <span>{props.homeTeamScore}</span>
        <span> - </span>
        <span>{props.awayTeamScore}</span>
      </div>
      <div className="scorers">
        {props.scorers.map(scorer => (
          <Scorers scorers={scorer} />
        ))}
      </div>
      <div className="three-stars">
        {props.stars.map(star => (
          <ThreeStars stars={star} />
        ))}
      </div>
    </div>
  );
}

export default GameResult;
