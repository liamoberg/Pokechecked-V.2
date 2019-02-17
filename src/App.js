import React, { Component } from 'react';
import './App.css';
import './Custom.css';
import Header from './Components/Header/header.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
