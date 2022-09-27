const {assert} = require('chai');
const assertEqual = require('../assertEqual');

// assertEqual("Lighthouse Labs","Bootcamp");
// assertEqual(1,1);
// assertEqual(1,2);

describe('#assertEqual',() => {
  it('returns true for arrays with equal numbers',() => {
    assert.strictEqual(assertEqual(1,1),true);
  });
  it('returns false for arrays with different numbers',() => {
    assert.strictEqual(assertEqual(1,2),false);
  });
  it('returns true for arrays with equal strings',() => {
    assert.strictEqual(assertEqual("Lighthouse Labs","Lighthouse Labs"),true);
  });
});