import React, { useState, useMemo } from "react";
import "./App.css";
import "./Custom.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/Pages/HomePage/HomePage";
import StandingsPage from "./Components/Pages/Standings/StandingsPage";
import Playoffs from "./Components/Pages/PlayoffsPage/Playoffs";
import HeaderContext from "./Components/Context/HeaderContext";

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
// import { HeaderContext } from "./Components/Context/HeaderContext";

// const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./Assets/scss/variables.scss');

const App = () => {
  const [gamesToShow, setGamesToShow] = useState([5, 10, 30]);
  console.log("CONTEXT UPDATED", gamesToShow);
  // const gamesValue = useMemo(() => ({ gamesToShow, setGamesToShow }), [
  //   gamesToShow,
  //   setGamesToShow
  // ]);

  // const [showAllTeams, setShowAllTeams] = useState(false);
  // const showAllTeamsValue = useMemo(() => ({ showAllTeams, setShowAllTeams }), [
  //   showAllTeams,
  //   setShowAllTeams
  // ]);

  return (
    <Router>
      <div className="wrapper">
        <div className="container">
          <HeaderContext.Provider
            value={{
              gamesToShow,
              setGamesToShow: value => setGamesToShow(value)
            }}
          >
            <Header />

            <Switch>
              <Route exact={true} path="/" component={HomePage} />
              <Route path="/standings" component={StandingsPage} />
              <Route path="/playoffs" component={Playoffs} />
            </Switch>
          </HeaderContext.Provider>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
