import React, { Component } from 'react';
import './App.css';
import './Custom.css';
import Header from './Components/Header/header';
import Games from './Components/Games/games';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Header />
          <Games />
          <Games />
          <Games />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
