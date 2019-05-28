// EXERCISE
// Implement the filter function.
// It takes in an array and a callback function. It should return a new array that contains only the items that pass the callback test (preserving the order).
// Do not use the built-in .filter() method. You may use a for loop.
const filter = (arr, callback) => {
  // Write your code here!
};

// TESTS
// All of these should print "true" to verify that the map function is working correctly. Feel free to add your own.
console.log(areArraysEqual(
  filter([1, 2, 3, 4, 5, 6], x => isEven(x)),
  [2, 4, 6]
));
console.log(areArraysEqual(
  filter([1, 2, 3, 4, 5, 6], x => isOdd(x)),
  [1, 3, 5]
));
console.log(areArraysEqual(
  filter([1, 2, 3, 4], x => x > 2),
  [3, 4]
));
console.log(areArraysEqual(
  filter(['Arbiter', 'Boss', 'Concierge'], x => x.length > 4),
  ['Arbiter', 'Concierge']
));
console.log(areArraysEqual(
  filter(['Dead Cells', 1, 0, undefined, null], x => Boolean(x) === true),
  ['Dead Cells', 1]
));
console.log(areArraysEqual(
  filter([], x => x),
  []
));

function areArraysEqual(xs, ys) {
  if (!(Array.isArray(xs) && Array.isArray(ys)) || xs.length !== ys.length) {
    return false;
  }
  return xs.every((x, i) => JSON.stringify(x) === JSON.stringify(ys[i]));
}

function isEven(x) {
  return x % 2 === 0;
}

function isOdd(x) {
  return !isEven(x);
}
