import axios from 'axios';


import TeamEntity from '../../models/teamEntity';

export async function fetchAllTeams(): Promise<Array<TeamEntity>> {
  return await axios.get('http://localhost:8080/api/teams')
    .then(teams => teams.data);
}

export async function createNewTeam(teamName: string): Promise<TeamEntity> {
  return await axios.post('http://localhost:8080/api/teams', {
    teamName,
  })
    .then(response => response.data);
}
