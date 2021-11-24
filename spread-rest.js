const hobbies = [ 'Running', 'Climbing', 'Biking' ];

// Copy Array
const hobbiesCopy = hobbies.slice();
console.log(hobbiesCopy);

// Spread Array
const moreHobbiesCopied = [ ...hobbies ];
console.log(moreHobbiesCopied);
// returns [ 'Running', 'Climbing', 'Biking' ]

const person = {
	name: 'Dave',
	age: 35,
	hobby: 'Running'
};
console.log(person);
// Returns { name: 'Dave', age: 35, hobby: 'Running' }

const anotherPerson = { ...person };
console.log(anotherPerson);
// Returns { name: 'Dave', age: 35, hobby: 'Running' }

// Rest Operator
// Bundles all arguments together
const toArray = (...args) => {
	return args;
};

console.log(toArray(1, 2, 3, 4, 5));
// Returns [ 1, 2, 3, 4, 5 ]
