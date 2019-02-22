import React, { Component } from 'react';
import './games.css';
import Logo1 from '../../Assets/images/sprite-large.png';
import Logo2 from '../../Assets/images/sprite-large-1.png';
import Playbtn from '../SVG components/playbtn';

class Games extends Component {

    createGames = () => {
        let games = [];

        for (let i = 0; i < 4; i++) {
            games.push(            <div className="game">
            <div className="hometeam">
                <img src={Logo1} alt="123"/>
                <span>Edmonton Oilers</span>
            </div>
            <div className="resultwrap">
                <Playbtn />
                <a href="#" className="standard-btn">Results</a>
            </div>
            <div className="awayteam">
                <img src={Logo2} alt="123"/>
                <span>Minnesota Wild</span>
            </div>
        </div>)
        }

        return games
    }



    render () {
        return (
            <div className="gameday">
            <div className="divider">
                <span className="date">Saturday October 28</span>
                <div className="line"></div>
                <a href="#" className="standard-btn">Results</a>
            </div>
            <div className="gameWrapper">
                {this.createGames()}
            </div>
            </div>
        );
    }
}

export default Games;