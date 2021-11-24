let name = 'Dave';
const age = 32;
let hasHobbies = true;

const summarizeUser = (username, userAge, userHasHobby) => {
	return ('User name is ' + username + ', user age is ' + userAge + ', and user has hobbies? ' + userHasHobby);
}




const add = (a, b) => {
    return a+b
}

//  Can write this shorter
const addFunc = (a, b) => a + b;

// Can also write
const addOne = a => a + 2;

const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies))
console.log(add(12,3))
console.log(addFunc(1,3))
console.log(addOne(2));
console.log(addRandom());