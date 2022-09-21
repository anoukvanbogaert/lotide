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

const middle = function (array) {
  let middleIndex = 0
  let result = []
  if (array.length % 2 !== 0) {
    let halfArray = array.length / 2
    middleIndex = Math.ceil(halfArray) - 1
    result.push(array[middleIndex])
    return result
  } else {
    halfArray = array.length / 2
    middleIndex = halfArray
    result.push(array[middleIndex])
    result.push(array[middleIndex + 1])
    return result
  }
}

console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4, 5, 6]))