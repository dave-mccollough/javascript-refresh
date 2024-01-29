// Arrow functions

const name = "Dave";
let age = 30;
const hasHobbies = true;

// Arrow Functions
const summarizeUser = (userName, userAge, userHasHobbies) => {
  return (
    "Username is " +
    userName +
    ", User age is " +
    userAge +
    ", and the user has hobbies: " +
    userHasHobbies
  );
};

console.log(summarizeUser(name, age, hasHobbies));

const add = (a, b) => a + b;
console.log(add(1, 2));

const addOne = (a) => a + 1;
console.log(addOne(1));

const addRandom = () => 1 + 2;
console.log(addRandom());
