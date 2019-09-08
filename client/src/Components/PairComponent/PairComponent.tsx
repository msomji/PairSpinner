import React from 'react';

export interface PairProps {
  pair: Array<Array<String>>;
  date: Date;
  render: boolean;
}

const formatPair: (pair: Array<String>, key: number) => JSX.Element = (pair: Array<String>, key: number) => {

  return (
    <p key={key}>{pair[0] + ' paired with ' + pair[1]}</p>
  );

};

export default function Pair({ pair, date, render }: PairProps) {
  return render ? (
    <>
      <p>{date.toLocaleDateString()}: </p>
      {pair.map((pairs, index) => formatPair(pairs, index))}
      <hr />
    </>
  ) : null;
}
