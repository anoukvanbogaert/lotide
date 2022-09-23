const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
  return result;
};

const words = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results = takeUntil(words, x => x === ",");
console.log(results);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

// const callback = function(x){
//   return x === ","
// }