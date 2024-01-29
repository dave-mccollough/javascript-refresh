// Objects, Properties, and Methods

// Person object
const person = {
  firstName: "Joe",
  lastName: "Smith",
  age: 30,
};

console.log(person);

const person2 = {
  firstName: "James",
  lastName: "Smith",
  greet() {
    console.log("Hi! My name is " + this.firstName);
  },
};

person2.greet();
