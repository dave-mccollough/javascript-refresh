// Core JavaScript Syntax

// String
var name = "Dave";
console.log(name);

// Number
var age = 30;
console.log(age);

// Boolean
hasHobbies = true;
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
