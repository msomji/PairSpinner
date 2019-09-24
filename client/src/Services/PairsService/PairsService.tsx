import axios from 'axios';

import PairsEntity from '../../models/pairsEntity';

export async function fetchAllPairs() {
  return await axios.get('http://localhost:8080/api/pairs')
    .then(pairs => pairs.data);
}


export async function saveNewPairSpin(teamName: string, pairs: Array<Array<string>>): Promise<PairsEntity> {
  return await axios.post('http://localhost:8080/api/pairs', {
    spinDate: new Date(),
    pairs,
    teamName,
  })
    .then(response => response.data);
}
