import React, { Component } from 'react';
import './Standings.css';

class Standings extends Component {


    render () {


        return (
            <div className="table-wrap">
                <span className="big-title">Eastern</span>
                <table>
                    <tbody>
                <tr>
                    <th className="title">Atlantic</th>
                    <th>GP</th> 
                    <th>Record</th>
                    <th>PTS</th>
                    <th>PTS%</th>
                    <th>GF-GA</th>
                    <th>Streak</th>
                </tr>
                <tr>
                    <td className="team">Tampa Bay lightning</td>
                    <td>56</td> 
                    <td>41-11-4</td>
                    <td>86</td>
                    <td>0.768</td>
                    <td>217-156</td>
                    <td>W2</td>
                </tr>
                <tr>
                    <td className="team">Tampa Bay lightning</td>
                    <td>56</td> 
                    <td>41-11-4</td>
                    <td>86</td>
                    <td>0.768</td>
                    <td>217-156</td>
                    <td>W2</td>
                </tr>
                <tr>
                    <td className="team">Tampa Bay lightning</td>
                    <td>56</td> 
                    <td>41-11-4</td>
                    <td>86</td>
                    <td>0.768</td>
                    <td>217-156</td>
                    <td>W2</td>
                </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

export default Standings;

