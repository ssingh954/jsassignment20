//Q3. Give 3 real world examples where async/await has been used?
/* Ans :  

*/
//import fetch from 'cross-fetch';
/*
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 3000); 
});

// async function
async function asyncFunc() {
    try {
        // wait until the promise resolves 
        let result = await promise; 

        console.log(result);
        console.log('hello');
    }   
    catch(error) {
        console.log(error);
    }
}
asyncFunc(); // Promise resolved
*/
/*
const https = require('https');
const req = https.get("https://api.ipify.org?format=json", res => {
    let data = "";
    res.on('data', d => {
        data += d
    });
    res.on('end', () => {
        obj = JSON.parse(data);
        console.log(obj.ip);
    });
});
*/
/*
async function showAvatar() {

    // read our JSON
    //let response = await fetch('/article/promise-chaining/user.json');
    //let user = await response.json();
  
    // read github user
    //let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = https.get('https://api.github.com/users/ssingh954');
    //let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
    img.remove();
  
    return githubUser;
  }
  
  showAvatar();
  */


/*
const https = require('https');
(async () => {
  try {
    const res = https.get('https://api.github.com/users/ssingh954');
    //console.log(res);
    

    const user = res.json();
    console.log(user);
    let img = document.createElement('img');
  } catch (err) {
    console.error(err);
  }
})();
*/

// Let's start! First, create the time function:
let is_shop_open = true;
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"))
      }
    });
}

///Now, let's create our kitchen:

async function kitchen(){
    try{
	await time(2000)
	console.log(`${stocks.Fruits[0]} was selected`)

	await time(0000)
	console.log("production has started")

	await time(2000)
	console.log("fruit has been chopped")

	await time(1000)
	console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on ${stocks.holder[1]}`)

	await time(3000)
	console.log(`${stocks.toppings[0]} as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")
    }

    catch(error){
	 console.log("customer left")
    }
}
 
 // Trigger
 kitchen();


