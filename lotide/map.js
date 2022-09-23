const map = function(mapArray, callback) {
  const results = [];
  for (let item of mapArray) {
    results.push(callback(item));
  }

  return results;

};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

const assertArrayEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
      process.exit();
    }
  }
  return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
};

console.log(assertArrayEqual(results1, ['g', 'c', 't', 'm', 't']));


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(assertObjectsEqual(ab, ba));
// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertObjectsEqual(ab, abc));
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(assertObjectsEqual(cd, dc)); // => true
// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(assertObjectsEqual(cd, cd2));
