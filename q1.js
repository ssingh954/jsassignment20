//Q1. How does async/await help with performance and scalability?
/* Ans :  
async and await are keywords which make synchronous-looking code asynchronous.
We use async when defining a function to signify that it returns a Promise. 

await, meanwhile, is used before a Promise
It pauses the execution of an asynchronous function until the Promise is resolved. 

when returning a Promise inside an async function, you don’t need to use await.

For example, to await our greeting , we could write:

*/
async function doSomethingAsynchronous() {
  const value = await greeting;
}

(async () => {
  await call(5); //This will print result first
  await call(2); 
  await call(1);
})();

function call(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`This call took ${timeout} seconds`);
      resolve(true);
    }, timeout * 1000);
  });
}