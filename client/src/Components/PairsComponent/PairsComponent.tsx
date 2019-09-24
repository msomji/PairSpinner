import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { fetchAllPairs, saveNewPairSpin } from '../../Services/PairsService/PairsService';
import PairsEntity from '../../models/pairsEntity';
import Pair from '../PairComponent/PairComponent';
import PairSpinnerComponent from '../PairSpinnerComponent/PairSpinnerComponent';
interface PairsRouteParams {
  teamName: string;
}

export default function PairsComponent(props: RouteComponentProps<PairsRouteParams>) {
  const [loaded, setLoaded] = useState(false);
  const [saved, setSaved] = useState(false);
  const [pairs, setPairs] = useState<Array<PairsEntity>>([]);

  useEffect(() => {
    fetchAllPairs()
      .then(pairEntities => {
        setPairs(pairEntities);
        setLoaded(true);
      });
  }, [saved]);

  const teamPairs: Array<Array<string>> = pairs
    .filter(team => team.teamName === props.match.params.teamName)
    .map(team => team.pairs)
    .flatMap(pairArray => pairArray);

  const sortedPreviousPairPartners: Array<Array<string>> = teamPairs
    .map(currentPair => currentPair.map(pairPartner => pairPartner.toLowerCase()))
    .map(currentPair => currentPair.sort());

  const allTeamMembers: (namesArray: Array<Array<string>>) => Array<string> = (namesArrays) =>
    namesArrays
      .flat()
      .reduce((initial: Array<string>, current: string) =>
        !initial.includes(current) ? [...initial, current] : initial, []);

  const teamMembers = allTeamMembers(teamPairs);

  const saveNewPairings: (newPairings: Array<Array<string>>) => void = (newPairings) => {
    saveNewPairSpin(props.match.params.teamName, newPairings);
    setSaved(!saved);
  };

  if (loaded) {
    return (
      <>
        <p>Your Team:  {teamMembers.join(', ')}</p>
        <PairSpinnerComponent
          sortedPreviousPairings={sortedPreviousPairPartners}
          teamMembers={teamMembers}
          saveNewPairings={saveNewPairings}
        ></PairSpinnerComponent>
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
