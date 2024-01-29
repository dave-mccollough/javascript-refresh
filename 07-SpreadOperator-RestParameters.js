// Spread Operator

const arrayToCopy = ["Sports", "Camping", "Programming"];

// Slice copies an array
const copiedArray = arrayToCopy.slice();
console.log(copiedArray);

// Create a nested array
const nestedArray = [copiedArray];
console.log(nestedArray);

// Spread Operator - use to copy existing arrays
const spreadArray = [...arrayToCopy];
console.log(spreadArray);

// Rest Operator - use to create new arrays
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3, 4));
