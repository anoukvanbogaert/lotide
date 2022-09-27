const {assert} = require('chai');
const assertEqual = require('../assertEqual');
const assertArrayEqual = require('../assertArrayEqual');
const tail = require('../tail');

// const words = ["Yo Yo","Lighthouse","Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length,3); // original array should still have 3 elements!

describe('#tail',() => {
  it('returns [2,3,4,5] for [1,2,3,4,5]',() => {
    assertArrayEqual(tail([1,2,3,4,5]),[2,3,4,5]);
  });
  it("returns 'labs' for ['lighthouse', 'labs']",() => {
    assertArrayEqual(tail(['lighthouse','labs']),('labs'));
  });
});