import React from 'react';
import PersonCard from '../PersonCard/PersonCard';
import './PairComponent.scss';

export interface PairProps {
  pair: Array<Array<string>>;
  date: Date;
}

const formatPair: (pair: Array<string>, key: number) => JSX.Element = (pair: Array<string>, key: number) => 
 (<div className="cards" key={key}><PersonCard name={pair[0]} /><PersonCard name={pair[1]} /></div>);

export default function Pair({ pair, date }: PairProps) {
  return (
    <>
      <p>{date.toLocaleDateString()}: </p>
      <div className="cards-container">
        {pair.map((pairs, index) => formatPair(pairs, index))}
      </div>
      <hr />
    </>
  );
}
