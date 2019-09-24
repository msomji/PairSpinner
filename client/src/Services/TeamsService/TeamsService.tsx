import axios from 'axios';


import TeamEntity from '../../models/teamEntity';

export async function fetchAllTeams(): Promise<Array<TeamEntity>> {
  return await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/teams`)
    .then(teams => teams.data);
}

export async function createNewTeam(teamName: string): Promise<TeamEntity> {
  return await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/teams`, {
    teamName,
  })
    .then(response => response.data);
}
