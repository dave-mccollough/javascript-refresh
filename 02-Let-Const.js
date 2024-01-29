// Let and Const

// Const
// creates a constant - can't be changed
// Use const as often as possible
const name = "Dave";
console.log(name);

// Number
const age = 30;
console.log(age);

// Boolean
const hasHobbies = true;
console.log(hasHobbies);

// Functions (pure functions)
function summarizeUser(userName, userAge, userHasHobbies) {
  return (
    "Username is " +
    userName +
    ", User age is " +
    userAge +
    ", and the user has hobbies: " +
    userHasHobbies
  );
}

console.log(summarizeUser(name, age, hasHobbies));
