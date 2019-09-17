import React, { useState, useEffect } from "react";
import { client } from "../../../Environment/apollo";
import gql from "graphql-tag";
import Logo1 from "../../../Assets/images/sprite-large-1.png";
import Logo2 from "../../../Assets/images/sprite-large.png";
import DividerPlayoffOne from "../../SVG components/DividerPlayoffOne";
import DividerPlayoffTwo from "../../SVG components/DividerPlayoffTwo";
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

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPlayoffs();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="playoffs">
      <span>If playoffs started today</span>
      <div className="bracket">
        {/* <div className="left-side">
          <div className="four">
            <div className="game">
              <div className="top">
                <img src={Logo1} alt="Logo" />
                <span>New York Rangers</span>
              </div>
              <div className="bottom">
                <img src={Logo2} alt="Logo" />
                <span>Nashville Predators</span>
              </div>
              <DividerPlayoffOne />
            </div>
            <div className="game">
              <div className="top">
                <img src={Logo1} alt="Logo" />
                <span>New York Rangers</span>
              </div>
              <div className="bottom">
                <img src={Logo2} alt="Logo" />
                <span>Nashville Predators</span>
              </div>
              <DividerPlayoffOne />
            </div>
            <div className="game">
              <div className="top">
                <img src={Logo1} alt="Logo" />
                <span>New York Rangers</span>
              </div>
              <div className="bottom">
                <img src={Logo2} alt="Logo" />
                <span>Nashville Predators</span>
              </div>
              <DividerPlayoffOne />
            </div>
            <div className="game">
              <div className="top">
                <img src={Logo1} alt="Logo" />
                <span>New York Rangers</span>
              </div>
              <div className="bottom">
                <img src={Logo2} alt="Logo" />
                <span>Nashville Predators</span>
              </div>
              <DividerPlayoffOne />
            </div>
          </div>
          <div className="two">
            <div className="game">
              <div className="top">
                <img src={Logo1} alt="Logo" />
                <span>New York Rangers</span>
              </div>
              <div className="bottom">
                <img src={Logo2} alt="Logo" />
                <span>Nashville Predators</span>
              </div>
              <DividerPlayoffTwo />
            </div>
            <div className="game">
              <div className="top">
                <img src={Logo1} alt="Logo" />
                <span>New York Rangers</span>
              </div>
              <div className="bottom">
                <img src={Logo2} alt="Logo" />
                <span>Nashville Predators</span>
              </div>
              <DividerPlayoffTwo />
            </div>
          </div>
        </div> */}
        <div className="right-side"></div>
      </div>
    </div>
  );
}

export default Playoffs;
