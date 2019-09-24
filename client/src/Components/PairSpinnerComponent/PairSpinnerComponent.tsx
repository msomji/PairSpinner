import PairSpinner from '../../PairSpinner/PairSpinner';
import Pair from '../PairComponent/PairComponent';

import React, { useState } from 'react';

export interface PairSpinnerComponentProps {
  sortedPreviousPairings: Array<Array<string>>;
  teamMembers: Array<string>;
  saveNewPairings: (newPairings: Array<Array<string>>) => void;
}

export default function PairSpinnerComponent({ sortedPreviousPairings, teamMembers, saveNewPairings }: PairSpinnerComponentProps) {
  const pairs: Array<Array<string>> = new PairSpinner().spin(teamMembers, sortedPreviousPairings);

  const [getPairs, setPairs] = useState<Array<Array<string>>>(pairs);

  const reSpin: () => void = () =>
    setPairs(new PairSpinner().spin(teamMembers, sortedPreviousPairings));


  return (
    <>
      <p>These Would be the next pairs: </p>
      <Pair render={true} pair={getPairs} date={new Date()}></Pair>
      <button onClick={() => saveNewPairings(getPairs)}>save</button>
      <button onClick={() => reSpin()}>respin</button>
    </>
  );

}
