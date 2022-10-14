//Q2. Is it possible to use async/await with promise chains? If yes, how can this be achieved?
/* Ans :  
Yes, You can await any Promise from inside an async function. 
The calling code shouldn't need to be refactored won't know the difference between invoking an async function or a regular function that returns a promise. 
By the spec, when an async function is called, it returns a Promise.
*/

async function doSomething(stuff) {
    // ...
    
      return functionThatReturnsPromise()
        .then((a) => /* ... */)
        .then((b) => /* ... */)
        .then(async (c) => {
          const user = await someService.createUser(stuff, c);
          return user;
        });
};