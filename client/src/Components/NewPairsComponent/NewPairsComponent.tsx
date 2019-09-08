import React, { useState } from 'react';

import PairSpinner from '../../PairSpinner/PairSpinner';
import Pair from '../PairComponent/PairComponent';

export interface NewPairsComponentProps {
  sortedPreviousPairings: Array<Array<string>>;
  teamMembers: Array<string>;
}

export default function NewPairsComponent(props: NewPairsComponentProps) {
  const pairs: Array<Array<string>> = new PairSpinner().spin(props.teamMembers, props.sortedPreviousPairings);
  const [getPairs, setPairs] = useState(pairs);
  const pairSpin: () => void = () => {
    console.log('spinning');
    setPairs(new PairSpinner().spin(props.teamMembers, props.sortedPreviousPairings));
  };


  return (
    <>
      <p>These Would be the next pairs: </p>
      <Pair render={true} pair={getPairs} date={new Date()}></Pair>
      <button>save</button>
      <button onClick={() => pairSpin()}>respin</button>
    </>
  );

}
