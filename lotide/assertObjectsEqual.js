const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (obj1, obj2) {
  const keysOfObj1 = Object.keys(obj1);// ['a', 'b']
  const keysOfObj2 = Object.keys(obj2);
  if (keysOfObj1.length !== keysOfObj2.length) {
    return false;
  }
  for (const key1 of keysOfObj1) {
    if (Array.isArray(obj1[key1]) && Array.isArray(obj2[key1])) {
      if (!eqArrays(obj1[key1], obj2[key1])) {
        return false;
      }
    } else if (obj1[key1] !== obj2[key1]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  // console.log(`example: ${inspect(actual)}`)
  if (eqObjects(actual, expected) !== true) {
    return `🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
  } else {
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
  }
}



// const assertArrayEqual = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
//       process.exit();
//     }
//   }
//   return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
// };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba));
const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc));
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2));