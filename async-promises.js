const fetchData = (callback) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done!');
		}, 1500);
	});
    return promise;
};
// Async Code - Code that doesn't finish immediately
setTimeout(() => {
	console.log('Timer is Done');
	fetchData()
    .then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => { 
        console.log(text2);
        return fetchData();
    });
    
}, 2000);
// 2 second timeout then code runs

// Syncronous Code
console.log('Hello!');
console.log('Hi!');
// Returns:
// Hello!
// Hi!
// Timer is Done (after 2 seconds)
