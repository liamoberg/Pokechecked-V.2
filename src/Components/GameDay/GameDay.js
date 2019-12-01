import React, { useState, useEffect } from "react";
import Games from "../Games/Games";
import styled from "styled-components";
import { fonts, color, device } from "../../Assets/Styles";
import { StandardButton } from "../../Assets/Buttons";

const Divider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Date = styled.div`
  font-family: ${fonts.FontMain};
  font-size: 1.8rem;
`;

const Line = styled.span`
  width: 80%;
  border: 1px solid ${color.Violet};
  opacity: 0.7;

  @media ${device.mq1440} {
    width: 920px;
  }

  @media ${device.mq1300} {
    width: 770px;
  }

  @media ${device.mq1199} {
    width: 700px;
  }

  @media ${device.mq1100} {
    width: 620px;
  }

  @media ${device.mq1024} {
    width: 65%;
  }
`;

const GameDay = ({ gameDay }) => {
  //   console.log(gameDay);
  const [showResult, setShowResult] = useState(false);

  const showAllResults = () => {
    if (showResult === false) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  };

  const parseDate = date => {
    return date.slice(0, -7);
  };

  //   console.log(data);
  return (
    <div className="gameday">
      <Divider>
        <div className="wrap">
          <Date>{parseDate(gameDay.day)}</Date>
        </div>
        <Line></Line>

        <StandardButton
          active={showResult ? true : false}
          onClick={() => showAllResults()}
        >
          {showResult ? "Hide" : "Result"}
        </StandardButton>
      </Divider>
      <div className="gameWrapper">
        {gameDay.games.map((game, index) => (
          <Games key={index} games={game} showAllResults={showResult} />
        ))}
      </div>
    </div>
  );
};

export default GameDay;
