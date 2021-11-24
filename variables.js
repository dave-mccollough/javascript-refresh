let name = 'Dave';
const age = 32;
let hasHobbies = true;

function summarizeUser(username, userAge, userHasHobby) {
	return ('User name is ' + username + ', user age is ' + userAge + ', and user has hobbies? ' + userHasHobby);
}

console.log(summarizeUser(name, age, hasHobbies))