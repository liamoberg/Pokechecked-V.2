import React, { Component } from 'react';
import './App.css';
import './Custom.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Pages/HomePage/HomePage';
import StandingsPage from './Components/Pages/Standings/StandingsPage';
import Goalies from './Components/Pages/GoaliesPage/Goalies';
import Playoffs from './Components/Pages/PlayoffsPage/Playoffs';


// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="wrapper">
        <div className="container">

          <Header />
          {/* <Games />
          <Games />
          <Games />
          */}

          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route path="/standings" component={StandingsPage} /> 
            <Route path="/goalies" component={Goalies} /> 
            <Route path="/playoffs" component={Playoffs} /> 
          </Switch>

          <Footer /> 
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
