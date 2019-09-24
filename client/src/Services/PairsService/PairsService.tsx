import axios from 'axios';

import PairsEntity from '../../models/pairsEntity';

export async function fetchAllPairs() {
  return await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/pairs`)
    .then(pairs => pairs.data);
}


export async function saveNewPairSpin(teamName: string, pairs: Array<Array<string>>): Promise<PairsEntity> {
  return await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/pairs`, {
    spinDate: new Date(),
    pairs,
    teamName,
  })
    .then(response => response.data);
}
