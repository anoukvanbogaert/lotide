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

const without = function (source, itemsToRemove) {
  let result = []
  for (let i = 0; i < source.length; i++) {
    // for (let j = 0; j < itemsToRemove.length; j++) {
    //   if (source[i] !== itemsToRemove[j]) {
    //     result.push(source[i])
    //   }
    // }
    const sourceItem = source[i];
    if (!itemsToRemove.includes(sourceItem)) {
      result.push(sourceItem)
    }
  }
  return result
}


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]