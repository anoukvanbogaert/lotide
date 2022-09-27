const {assert} = require('chai');

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays([1, 2, 3], [3, 2, 1]));

describe('#eqArrays',() => {
  it('returns true for arrays with equal numbers',() => {
    assert.strictEqual(eqArrays([1,2,3],[1,2,3]),true);
  });
  it('returns false for arrays with different numbers',() => {
    assert.strictEqual(assertEqual([1,2,3],[3,2,1]),false);
  });
});