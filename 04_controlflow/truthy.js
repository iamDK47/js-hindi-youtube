// const email = "daniyalkamran@gmail.com"

// if (email){
//     console.log("yes email")
// } else {
//     console.log("no email")
// }

// const email = ""

// if (email){
//     console.log("yes email")
// } else {
//     console.log("no email")
// }

// const email = []

// if (email){
//     console.log("yes email")
// } else {
//     console.log("no email")
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0" , 'false' , " ", {} , [], function(){}

//  check truthy of array
// const email = []
// if (email.length === 0){
//     console.log("there is no email")
// }
// // check truthy of object
// const userEmail = {}
// if (Object.keys(emptyObj).length === 0){
//     console.log("email is emtpy")
// }

//+++++++++ Nullish Coalescing Operator (??): null undefined++++++++++++++++

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 20
val1 = null ?? 10 ?? 20

console.log(val1)

// ++++++++++++++++Terniary Operator++++++++++++

// condition ? true : false

const price = 100
price <= 80 ? console.log("yes true") : console.log("false that is")