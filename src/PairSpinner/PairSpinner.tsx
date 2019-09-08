export default class PairSpinner {

  spin(teamMembers: Array<string>, previousPairings: Array<Array<string>>): Array<Array<string>> {
    const allPotentialPairs = this.potentialPairs(teamMembers[0], teamMembers);
    const previouslyPairedWith = this.previousMemberPairings(teamMembers[0], previousPairings);
    const nextPair = this.newPairCombinations(allPotentialPairs, previouslyPairedWith);
    const remainingTeamMembers = this.removePairFromTeamMembers(nextPair, teamMembers);
    return remainingTeamMembers.length !== 0 ?
      [nextPair, ...this.spin(remainingTeamMembers, previousPairings)] :
      [nextPair];

  }

  _isEqualSortedArray: (array1: Array<string>) => (array2: Array<string>) => boolean = (array1) => (array2) =>
    array1.sort().every((value, index) => value === array2.sort()[index])

  potentialPairs(member: string, teamMembers: Array<string>) {
    return teamMembers
      .filter(name => name !== member)
      .map(pairPartner => [member, pairPartner].sort());
  }

  previousMemberPairings(member: string, previousPairings: Array<Array<string>>): Array<Array<string>> {
    return previousPairings.filter(p => p.includes(member));
  }

  newPairCombinations(allPossibleCombinations: Array<Array<string>>, oldCombinations: Array<Array<string>>): Array<string> {
    const nexPairCombination = allPossibleCombinations.filter(combination => !oldCombinations
      .map(this._isEqualSortedArray(combination)).includes(true));

    return nexPairCombination.length === 0 ?
      oldCombinations[oldCombinations.length - 1] :
      nexPairCombination[Math.floor(Math.random() * nexPairCombination.length)];
  }

  removePairFromTeamMembers(pair: Array<string>, teamMembers: Array<string>): any {
    return teamMembers.filter(member => !pair.includes(member));
  }

}



