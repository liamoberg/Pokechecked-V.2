import React from "react";
import "./GameResult.css";
import Scorers from "../Scorers/Scorers";
import ThreeStars from "../Games/ThreeStars";

const GameResult = ({ homeTeamScore, awayTeamScore, scorers, stars }) => (
  <div className="result">
    <div className="score">
      <span>{homeTeamScore}</span>
      <span> - </span>
      <span>{awayTeamScore}</span>
    </div>
    <div className="scorers">
      {scorers.map(scorer => (
        <Scorers scorers={scorer} />
      ))}
    </div>
    <div className="three-stars">
      {stars.map(star => (
        <ThreeStars stars={star} />
      ))}
    </div>
  </div>
);

export default GameResult;
