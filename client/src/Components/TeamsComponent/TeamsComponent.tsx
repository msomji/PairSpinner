import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import TeamEntity from '../../models/teamEntity';
export default function TeamsComponent() {
    const [loaded, setLoading] = useState(false);
    const [teams, setTeams] = useState(['']);

    useEffect(() => {
        axios.get('http://localhost:8080/api/teams')
            .then((data) => {
                setTeams(data.data.map((t: TeamEntity) => t.teamName));
                setLoading(true);
            });
    }, []);

    if (loaded) {
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
    } else {
        return null;
    }

}
