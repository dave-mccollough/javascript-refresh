// Async code and promises

// Asynchronous code
setTimeout(() => {
  console.log("Timer is done!");
  fetchData((text) => {
    console.log(text);
  });
}, 2000);

// Synchronous code
console.log("Hello!");
console.log("Hi!");

const fetchData = (callback) => {
  setTimeout(() => {
    callback("Done!");
  }, 1500);
};

// Promises
const fetchData2 = (callback2) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};
