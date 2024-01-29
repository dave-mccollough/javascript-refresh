// Destructuring

// Object Destructuring

const person = {
  name: "Andrew",
  age: 26,
  greeting() {
    console.log(
      "Hi, I am " + this.name + "and I am " + this.age + " years old!"
    );
  },
};

const printName = ({ name, age }) => {
  console.log(name, age);
};

printName(person);

const { name, age } = person;
console.log(name, age);

// Array Destructuring

const hobbies = ["Sports", "Climbing"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
