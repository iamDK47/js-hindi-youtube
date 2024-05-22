// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100


// Reference (Non Primitive)

// Array, Objects, Functions

const Dd = Symbol('123')
const id = Symbol('123')

// console.log( Dd === id) 


// +++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "dani"

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "daniyalkamran33@gmail.com"

console.log(userOne);
console.log(userTwo);