const {assert} = require('chai');
const assertArrayEqual = require('../assertArrayEqual');
const eqArrays = require('../eqArrays');

// console.log(assertArrayEqual([1, 2, 3], [1, 2, 3]));
// console.log(assertArrayEqual([1, 2, 3], [3, 2, 1]));

describe('#assertArrayEqual',() => {
  it('returns true for arrays with numbers',() => {
    assert.strictEqual(assertArrayEqual([1,2,3],[1,2,3]),true);
  });
});