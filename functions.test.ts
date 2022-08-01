const {shuffleArray} = require('./utils')

let testArr =[1,2,3,4,5]

describe('shuffleArray should', () => {
test("argument should return same length", () => {
    let results = shuffleArray(testArr);
    expect(testArr.length).toEqual(results.length)
})
})