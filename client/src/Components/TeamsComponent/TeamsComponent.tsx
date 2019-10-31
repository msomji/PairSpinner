import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchAllTeams } from '../../Services/TeamsService/TeamsService';
import TeamEntity from '../../models/teamEntity';

export default function TeamsComponent() {
  const [loaded, setLoaded] = useState(false);
  const [teams, setTeams] = useState(['']);

  useEffect(() => {

    fetchAllTeams()
      .then((data) => {
        setTeams(data.map((team: TeamEntity) => team.teamName));
        setLoaded(true);
      });
  }, []);

  if (loaded) {
    return (
      <>
        <p>Select your team:</p>
        <ul>
          {teams.map((team, index) => (<li key={index}><Link to={"/profile/" +team}>{team}</Link></li>))}
        </ul>
      </>
    );
  } else {
    return (<>
      <div>loading teams....</div></>);
  }

}
