// let two = 3
// if ( two !=3 ) {
//     console.log("das ok")
// } else {
//     console.log("das not ok")
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if ( score > 100){
//     const power = "yes"
//     console.log(`user power ${power}`)
// }
// console.log(`user power ${power}`)

// const score = 200
// if ( score > 100){
//     var power = "yes"
//     console.log(`user power ${power}`)
// }
// console.log(`user power ${power}`) var is not contained in scope

// const balance = 1000

// if ( balance < 500){
//     console.log("balance is less than 500")
// } else if ( balance < 800){
//     console.log("balance is less than 800")
// } else {
//     console.log("balance is more than 1000")
// }

const isLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if ( isLoggedIn && debitCard){
    console.log("welcome to the website")
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("welcome g")
}
