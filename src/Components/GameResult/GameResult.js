import React from "react";
import "./GameResult.css";
import Scorers from "../Scorers/Scorers";

const GameResult = ({ homeTeamScore, awayTeamScore, scorers }) => (
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
  </div>
);

export default GameResult;
