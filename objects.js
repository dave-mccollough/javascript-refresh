const person = {
    name: 'Dave',
    age: 34,
    favoriteHobby: 'Running'
}

console.log(person);

// Putting a function in a object
const newPerson = {
    name: 'Dave',
    age: 34,
    favoriteHobby: 'Running',
    greet() {
        console.log('Hi, my name is ' + this.name + '!');
    }
}

newPerson.greet();