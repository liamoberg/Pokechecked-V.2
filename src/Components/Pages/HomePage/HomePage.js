import React, { Component } from "react";
import "./HomePage.css";
import Games from "../../Games/games";
import { client } from "../../../Environment/apollo";
import gql from "graphql-tag";
import DayDivider from "../../DayDivider/DayDivider";

const getHighlights = async () => {
  const {
    data: { fetchHighlights }
  } = await client.query({
    query: gql`
      {
        fetchHighlights(Hello: "hello") {
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
    this.state = { data: [] };
  }

  async componentDidMount() {
    const dividers = await getHighlights();
    this.setState({ data: dividers });
    console.log(this.state.data);
  }

  render() {
    return (
      <div>
        {this.state.data.map((highlight, index) => {
          return (
            <div className="gameday">
              <DayDivider day={highlight.day} />
              <Games games={highlight.games} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default HomePage;
