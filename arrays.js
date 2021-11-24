
const hobbies = ['Running', 'Climbing', 'Biking'];

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby))

hobbies.push('Kayaking');
console.log(hobbies);