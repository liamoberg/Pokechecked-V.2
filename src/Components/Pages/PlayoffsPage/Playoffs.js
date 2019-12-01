import React, { useState, useEffect } from "react";
import { client } from "../../../Environment/apollo";
import gql from "graphql-tag";
import Logo1 from "../../../Assets/images/sprite-large-1.png";
import Logo2 from "../../../Assets/images/sprite-large.png";
import DividerPlayoffOne from "../../SVG components/DividerPlayoffOne";
import DividerPlayoffTwo from "../../SVG components/DividerPlayoffTwo";
import DividerPlayoffThree from "../../SVG components/DividerPlayoffThree";
import "./Playoffs.css";

const getPlayoffs = async () => {
  const {
    data: { getPlayoffs }
  } = await client.query({
    query: gql`
      {
        getPlayoffs {
          eastern {
            team1 {
              team {
                name
              }
            }
            team2 {
              team {
                name
              }
            }
          }
          western {
            team1 {
              team {
                name
              }
            }
            team2 {
              team {
                name
              }
            }
          }
        }
      }
    `
  });
  return getPlayoffs;
};

function Playoffs() {
  const [data, setData] = useState({ eastern: [], western: [] });

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
    const fetchData = async () => {
      const result = await getPlayoffs();
      setData(result);
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="playoffs">
      <span>If playoffs started today</span>
      <div className="bracket">
        <div className="left-side">
          <div className="four">
            {data.western.map(games => (
              <div className="game">
                <div className="top">
                  <div
                    className="team-logo"
                    style={{
                      backgroundPosition: GetSpritePos(games.team1.team.name)
                        .bgPos
                    }}
                  ></div>
                  <span>{games.team1.team.name}</span>
                </div>
                <div className="bottom">
                  <div
                    className="team-logo"
                    style={{
                      backgroundPosition: GetSpritePos(games.team2.team.name)
                        .bgPos
                    }}
                  ></div>
                  <span>{games.team2.team.name}</span>
                </div>
                <div className="divider-one"></div>
              </div>
            ))}
          </div>
          <div className="two">
            <div className="game">
              <div className="top"></div>
              <div className="bottom"></div>
              <div className="divider-one"></div>
            </div>
            <div className="game">
              <div className="top"></div>
              <div className="bottom"></div>
              <div className="divider-one"></div>
            </div>
          </div>
          <div className="one">
            <div className="game">
              <div className="top"></div>
              <div className="bottom"></div>
              <div className="divider-one"></div>
            </div>
          </div>
          <div className="final"></div>
        </div>
        <div className="right-side">
          <div className="four">
            {data.eastern.map(games => (
              <div className="game">
                <div className="top">
                  <div
                    className="team-logo"
                    style={{
                      backgroundPosition: GetSpritePos(games.team1.team.name)
                        .bgPos
                    }}
                  ></div>
                  <span>{games.team1.team.name}</span>
                </div>
                <div className="bottom">
                  <div
                    className="team-logo"
                    style={{
                      backgroundPosition: GetSpritePos(games.team2.team.name)
                        .bgPos
                    }}
                  ></div>
                  <span>{games.team2.team.name}</span>
                </div>
                <div className="divider-one"></div>
              </div>
            ))}
          </div>
          <div className="two">
            <div className="game">
              <div className="top"></div>
              <div className="bottom"></div>
              <div className="divider-one"></div>
            </div>
            <div className="game">
              <div className="top"></div>
              <div className="bottom"></div>
              <div className="divider-one"></div>
            </div>
          </div>
          <div className="one">
            <div className="game">
              <div className="top"></div>
              <div className="bottom"></div>
              <div className="divider-one"></div>
            </div>
          </div>
          <div className="final"></div>
        </div>
      </div>
    </div>
  );
}

export default Playoffs;
