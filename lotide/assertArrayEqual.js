const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true
}

const assertArrayEqual = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`)
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`)
      process.exit()
    }
  }
  return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`
}

console.log(assertArrayEqual([1, 2, 3], [1, 2, 3]))
console.log(assertArrayEqual([1, 2, 3], [3, 2, 1])) 