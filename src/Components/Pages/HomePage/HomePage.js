import React, { Component } from 'react';
import './HomePage.css';
import Games from '../../Games/games';

class HomePage extends Component {

    render () {
        return (
            <div>
                            <Games />
                            <Games />
                            <Games />
            </div>
        );
    }
}

export default HomePage;

