import React, { Component } from 'react';
import './StandingsPage.css';
import Standings from '../../Standings/Standings';

class StandingsPage extends Component {

    render () {
        return (
            <div className="homo">
                <Standings />
            </div>
        );
    }
}

export default StandingsPage;

