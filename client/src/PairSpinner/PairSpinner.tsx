export default class PairSpinner {
  spin(
    teamMembers: Array<string>,
    previousPairings: Array<Array<string>>
  ): Array<Array<string>> {
    const allPotentialPairs = this.potentialPairs(teamMembers[0], teamMembers)
    const previouslyPairedWith = this.previousMemberPairings(
      teamMembers[0],
      previousPairings
    )
    // TODO: eventually limit this to only care about a certainy number
    // team members the inidividual has paired with compared to team size
    const nextPair = this.newPairCombinations(
      allPotentialPairs,
      previouslyPairedWith
    )
    const remainingTeamMembers = this.removePairFromTeamMembers(
      nextPair,
      teamMembers
    )

    return remainingTeamMembers.length !== 0
      ? [nextPair, ...this.spin(remainingTeamMembers, previousPairings)]
      : [nextPair]
  }

  _isEqualSortedArray: (
    array1: Array<string>
  ) => (array2: Array<string>) => boolean = array1 => array2 =>
    array1.sort().every((value, index) => value === array2.sort()[index])

  potentialPairs(member: string, teamMembers: Array<string>) {
    return teamMembers
      .filter(name => name !== member)
      .map(pairPartner => [member, pairPartner].sort())
  }

  previousMemberPairings(
    member: string,
    previousPairings: Array<Array<string>>
  ): Array<Array<string>> {
    return previousPairings.filter(p => p.includes(member))
  }

  newPairCombinations(
    allPossibleCombinations: Array<Array<string>>,
    oldCombinations: Array<Array<string>>
  ): Array<string> {
    const newPairCombinations = allPossibleCombinations.filter(
      combination =>
        !oldCombinations
          .map(this._isEqualSortedArray(combination))
          .includes(true)
    )

    return newPairCombinations.length === 0
      ? allPossibleCombinations[
          Math.floor(Math.random() * allPossibleCombinations.length)
        ]
      : newPairCombinations[
          Math.floor(Math.random() * newPairCombinations.length)
        ]
  }

  removePairFromTeamMembers(
    pair: Array<string>,
    teamMembers: Array<string>
  ): any {
    return teamMembers.filter(member => !pair.includes(member))
  }
}
