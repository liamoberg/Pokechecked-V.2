import React, { Component } from 'react';
import './Goalies.css';

class Goalies extends Component {

    render () {
        return (
            <div className="gameday">
            <div className="divider">
                <span className="date">Saturday October 28</span>
                <div className="line"></div>
                <a href="#" className="standard-btn">Results</a>
            </div>
            <div className="goalie-wrapper">
                <div className="goalie-container">
                    <div className="home-goalie">
                        <div className="img-wrap">
                        </div>
                        <span className="name">
                        </span>
                    </div>
                    <div className="away-goalie">
                        <div className="img-wrap">
                        </div>
                        <span className="name">
                        </span>
                    </div>  
                </div>
            </div>
            </div>
        );
    }
}

export default Goalies;

