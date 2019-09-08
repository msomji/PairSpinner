import React, { useState } from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import NewPairsComponent from '../NewPairsComponent/NewPairsComponent';
import Pair from '../PairComponent/PairComponent';

interface PairsRouteParams {
  teamName: string;
}

export default function PairsComponent(props: RouteComponentProps<PairsRouteParams>) {
  const [teams] = useState([
    {
      teamName: 'team1',
      date: new Date(),
      pairs: [
        ['a', 'b'],
        ['c', 'd'],
        ['e', 'f'],
        ['g', 'h'],
      ],
    },
    {
      teamName: 'team1',
      date: new Date('09/05/2019'),
      pairs: [
        ['b', 'f'],
        ['a', 'e'],
        ['g', 'd'],
        ['c', 'h'],
      ],
    },
    {
      teamName: 'team1',
      date: new Date('09/03/2019'),
      pairs: [
        ['c', 'f'],
        ['e', 'd'],
        ['h', 'a'],
        ['b', 'g'],
      ],
    },
    {
      teamName: 'team2',
      date: new Date(),
      pairs: [
        ['a', 'b'],
        ['c', 'd'],
        ['e', 'f'],
        ['g', 'h'],
      ],
    },
    {
      teamName: 'team2',
      date: new Date('09/05/2019'),
      pairs: [
        ['b', 'f'],
        ['a', 'e'],
        ['M', 'd'],
        ['Z', 'h'],
      ],
    },
    {
      teamName: 'team3',
      date: new Date('09/03/2019'),
      pairs: [
        ['c', 'f'],
        ['e', 'd'],
        ['h', 'a'],
        ['b', 'g'],
      ],
    },
  ]);

  const allTeamMembers: (namesArray: Array<Array<string>>) => Array<string> = (namesArrays) => {
    return namesArrays.flat()
      .reduce((initial: string, current: string) => !initial.includes(current) ? initial += (current) : initial, '')
      .split('');


  };

  const sortedPreviousPairings: Array<Array<string>> = teams
    .filter(team => team.teamName === props.match.params.teamName)
    .map(team => team.pairs)
    .flatMap(r => r)
    .map(s => s.map(d => d.toLowerCase()))
    .map(d => d.sort());

  const teamMembers = allTeamMembers(sortedPreviousPairings);


  return (
    <>
      <p>Your Team:  {teamMembers.join(', ')}</p>
      <NewPairsComponent
        sortedPreviousPairings={sortedPreviousPairings}
        teamMembers={teamMembers}

      ></NewPairsComponent>
      <hr />
      <p>previous pairs for {props.match.params.teamName}</p>
      {teams
        .filter(team => team.teamName === props.match.params.teamName)
        .sort((current, next) => next.date.getUTCSeconds() - current.date.getUTCSeconds())
        .map((team, index) => (<Pair render={true} key={index} pair={team.pairs} date={team.date}></Pair>))}

    </>
  );

}
