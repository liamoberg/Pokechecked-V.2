import React, { Component } from "react";
import "./HomePage.css";
import Games from "../../Games/games";
import { client } from "../../../Environment/apollo";
import gql from "graphql-tag";
import DayDivider from "../../DayDivider/DayDivider";
import GameResult from "../../GameResult/GameResult";

const getHighlights = async () => {
  const {
    data: { fetchHighlights }
  } = await client.query({
    query: gql`
      {
        fetchHighlights(from: "2018-10-06", to: "2018-10-07") {
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

class HomePage extends Component {
  constructor() {
    super();
    this.state = { data: [], showAllResults: false };
  }

  async componentDidMount() {
    const dividers = await getHighlights();
    this.setState({ data: dividers });
    console.log(this.state);
  }

  showAllResults() {
    if (this.state.showAllResults === false) {
      this.setState({ showAllResults: true });
    } else {
      this.setState({ showAllResults: false });
    }
  }

  parseDate = date => {
    return date.slice(0, -7);
  };

  render() {
    return (
      <div className="allgameswrap">
        {this.state.data.map((highlight, index) => {
          return (
            <div className="gameday">
              <div className="divider">
                <DayDivider day={this.parseDate(highlight.day)} />
                <div
                  className="standard-btn"
                  onClick={() => {
                    this.showAllResults();
                  }}
                >
                  Results
                </div>
              </div>
              <div className="gameWrapper">
                {highlight.games.map(game => (
                  <Games
                    showAllResults={this.state.showAllResults}
                    games={game}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HomePage;
