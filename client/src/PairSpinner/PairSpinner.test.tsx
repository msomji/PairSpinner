import PairSpinner from './PairSpinner'

describe('PairSpinner', () => {
  const teamMembers: Array<string> = ['a', 'b', 'c', 'd']
  const previousPairings: Array<Array<string>> = [['a', 'b'], ['c', 'd']]
  const subject = new PairSpinner()

  it('should be initialized', () => {
    expect(subject).toBeDefined()
  })

  describe('.potentialsPairs', () => {
    it('should return all possible combinations of pairs', () => {
      expect(subject.potentialPairs('a', teamMembers)).toEqual([
        ['a', 'b'],
        ['a', 'c'],
        ['a', 'd'],
      ])
    })

    it('should sort all possible combinations of pairs', () => {
      expect(subject.potentialPairs('c', teamMembers)).toEqual([
        ['a', 'c'],
        ['b', 'c'],
        ['c', 'd'],
      ])
    })
  })

  describe('.previousMemberPairings', () => {
    it("should return members' history of pairs", () => {
      expect(
        subject.previousMemberPairings('a', [
          ...previousPairings,
          ...previousPairings,
        ])
      ).toEqual([['a', 'b'], ['a', 'b']])
    })
  })

  describe('.newPairCombinations', () => {
    const allPossibleCombinations = [['a', 'b'], ['a', 'c'], ['a', 'd']]

    const oldCombinations = [['a', 'b'], ['d', 'a']]

    it('should return combinations of paring that has not been done before', () => {
      expect(
        subject.newPairCombinations(allPossibleCombinations, oldCombinations)
      ).toEqual(['a', 'c'])
    })

    it('should return oldest combination of paring it all have been considered ', () => {
      const actual = subject
        .newPairCombinations(allPossibleCombinations, allPossibleCombinations)
        .join()

      const expectedResult =
        actual === ['a', 'b'].join() ||
        actual === ['a', 'c'].join() ||
        actual === ['a', 'd'].join()
      expect(expectedResult).toBeTruthy()
    })
    it('should return the only possible combination ', () => {
      expect(
        subject.newPairCombinations([['a', 'b']], [['a', 'b'], ['a', 'd']])
      ).toEqual(['a', 'b'])
    })
  })

  describe('.removePairFromTeamMembers', () => {
    it('should remove selected pair from teamMembers array', () => {
      expect(
        subject.removePairFromTeamMembers(['a', 'b'], teamMembers)
      ).toEqual(['c', 'd'])
    })
  })

  describe('.spin', () => {
    it('should return an array of new shuffled pairs', () => {
      const actual = subject
        .spin(teamMembers, previousPairings)
        .flatMap(r => r)
        .sort()

      expect(actual).toEqual(['a', 'b', 'c', 'd'])
    })
  })
})
