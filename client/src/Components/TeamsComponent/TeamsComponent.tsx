import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TeamsComponent() {
    const [teams] = useState([
        'team1',
        'team2',
        'team3',
        'team4',
    ]);
    return (
        <>
            <p>Select your team:</p>
            <ul>

                {teams.map((team, index) => (
                    <li key={index}><Link to={team}>{team}</Link></li>
                ))}
            </ul>
        </>
    );
}
