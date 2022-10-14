//Q8. Is it possible to nest async functions in JavaScript? Explain with examples.
/* Ans :  yes its possible

*/
async function userInfo() {
    const promise1 = await new Promise((resolve, reject) => {
     resolve('USer account created!');
    });
    if (promise1) {
     const promise2 = await new Promise((resolve, reject) => {
      resolve('Subscription created!');
     });
     if (promise2) {
      const promise3 = await new Promise((resolve, reject) => {
       resolve('Subscription history created!');
      });
     }
    }
   }

   async function promiseAllDemo() {
    try {
     const promise1 = Promise.resolve("hello world");
     const promise2 = "Promise 2";
     const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'foo');
     });
     const resolvedPromises = await Promise.all([promise1, promise2,  promise3])
   } catch (err) {
     console.log(err)
    }
   }
