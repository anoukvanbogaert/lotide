const middle = function(array) {
  let middleIndex = 0;
  let result = [];
  if (array.length % 2 !== 0) {
    let halfArray = array.length / 2;
    middleIndex = Math.ceil(halfArray) - 1;
    result.push(array[middleIndex]);
    return result;
  } else {
    halfArray = array.length / 2;
    middleIndex = halfArray;
    result.push(array[middleIndex - 1]);
    result.push(array[middleIndex]);
    return result;
  }
};

module.exports = middle