//Q3. Give 3 real world examples where async/await has been used?

//a) Let's open our Shop
/*
We're gonna create two functions ->

* kitchen: to make ice cream
* time: to assign the amount of time each small task will take.
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
 
 // time taken to perform this 1 task
      await time(2000)
      console.log(`${stocks.Fruits[0]} was selected`)
    }
 
    catch(error){
      console.log("Customer left", error)
    }
 
    finally{
       console.log("Day ended, shop closed")
     }
 }
 
 // Trigger
 kitchen();



