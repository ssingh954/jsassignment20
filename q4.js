//Q4. Find output.
/* Ans :   3

*/
async function inc(x) {
    x = x + await 1
    return x;
}
async function increment(x){
    x = x + 1
    return x
}
inc(1).then(function(x){
    increment(x).then(function(x){
    console.log(x)
    })
})