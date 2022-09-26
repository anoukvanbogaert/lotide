const assertArrayEqual = require('../assertArrayEqual');
const middle = require('../middle');

const middle1 = middle([1, 2, 3, 4, 5])
const middle2 = middle([1, 2, 3, 4, 5, 6])

console.log(assertArrayEqual(middle1, [3]));
console.log(assertArrayEqual(middle2, [3, 4]));