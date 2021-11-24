const person = {
	name: 'Dave',
	age: 34,
	favoriteHobby: 'Running',
	greet() {
		console.log('Hi, my name is ' + this.name + '!');
	}
};

// DESTRUCTURING OBJECTS -------
// Objects are pulled out by property name
const printName = (personData) => {
	console.log(personData.name);
};
printName(person);
// Returns Dave

const printAnotherName = ({ age }) => {
	console.log(age);
};
printAnotherName(person);
// Returns 34

// Can also to this
const {favoriteHobby} = person;
console.log(favoriteHobby);
// Returns running 

// DESTRUCTURING ARRAYS ----
// Arrays are pulled out by position, not name
const hobbies = ['Running', 'Climbing', 'Biking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);