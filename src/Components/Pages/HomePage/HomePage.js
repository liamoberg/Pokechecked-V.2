import React, { useState, useEffect, Component } from "react";
import "./HomePage.css";
import GameDay from "../../../Components/GameDay/GameDay";
import AllTeams from "../../../Components/AllTeams/AllTeams";
import { client } from "../../../Environment/apollo";
import gql from "graphql-tag";

const getHighlights = async () => {
  const {
    data: { fetchHighlights }
  } = await client.query({
    query: gql`
      {
        fetchHighlights(from: "2018-10-06", to: "2018-10-10") {
          day
          games {
            homeTeam
            awayTeam
            homeGoals
            awayGoals
            homeWin
            arena
            date
            gameIsFinished
            requiredOvertime
            url
            stars {
              fullName
              id
              position
              image
            }
            scorers {
              assist {
                player {
                  fullName
                }
                personInfo {
                  primaryNumber
                }
              }

              scorer {
                player {
                  fullName
                }
                personInfo {
                  primaryNumber
                }
              }
              homeTeamScored
              gwg
              description
              standing
              strength
              period
              time
            }
          }
        }
      }
    `
  });
  return fetchHighlights;
};

function HomePage() {
  const [data, setData] = useState([{ day: "", games: [] }]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getHighlights();
      setData(result);
    };
    fetchData();
  }, []);

  // console.log(data);

  return (
    <div className="homePageWrap">
      <div className="allTeamsWrap">
        <AllTeams />
      </div>
      <div className="allgameswrap">
        {data.length !== 0 &&
          data.map((gameDay, index) => (
            <GameDay gameDay={gameDay} key={index} />
          ))}
      </div>
    </div>
  );
}

export default HomePage;
