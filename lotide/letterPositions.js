const letterPositions = function(letters) {
  const results = {};
  for (let i in letters) {
    const letter = letters[i];
    if (letter === " ") {
      continue;
    }


    if (results[letter] === undefined) {
      results[letter] = [];
    }

    results[letter].push(i);
  }

  return results;
};


console.log(letterPositions("hel lo"));

const eqArrays = function(arr1, arr2) {
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