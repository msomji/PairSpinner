import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import PairsEntity from '../../models/pairsEntity';
import NewPairsComponent from '../NewPairsComponent/NewPairsComponent';
import Pair from '../PairComponent/PairComponent';
interface PairsRouteParams {
  teamName: string;
}

export default function PairsComponent(props: RouteComponentProps<PairsRouteParams>) {
  const [loaded, setLoading] = useState(false);
  const [pairs, setPairs] = useState([{
    teamName: '',
    spinDate: '',
    pairs: [],
  } as PairsEntity]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/pairs')
      .then((data) => {
        const pairsEntity: Array<PairsEntity> = data.data;
        setPairs(pairsEntity);
        setLoading(true);
      });
  }, []);

  const allTeamMembers: (namesArray: Array<Array<string>>) => Array<string> = (namesArrays) =>
    namesArrays.flat()
      .reduce((initial: string, current: string) => !initial.includes(current) ? initial += (' ' + current) : initial, '')
      .split(' ')
      .filter(Boolean);

  const sortedPreviousPairings: Array<Array<string>> = pairs
    .filter(team => team.teamName === props.match.params.teamName)
    .map(team => team.pairs)
    .flatMap(r => r)
    .map(s => s.map(d => d.toLowerCase()))
    .map(d => d.sort());

  const teamMembers = allTeamMembers(sortedPreviousPairings);

  if (loaded) {
    return (
      <>
        <p>Your Team:  {teamMembers.join(', ')}</p>
        <NewPairsComponent
          sortedPreviousPairings={sortedPreviousPairings}
          teamMembers={teamMembers}

        ></NewPairsComponent>
        <hr />
        <p>previous pairs for {props.match.params.teamName}</p>
        {pairs
          .filter(team => team.teamName === props.match.params.teamName)
          .sort((current, next) => new Date(next.spinDate).getUTCSeconds() - new Date(current.spinDate).getUTCSeconds())
          .map((team, index) => (<Pair render={true} key={index} pair={team.pairs} date={new Date(team.spinDate)}></Pair>))}
      </>
    );
  } else {
    return (<><div>loading...</div></>);
  }
}
