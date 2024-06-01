const user = {
    username: "daniyal",
    price: 1000,

    print: function (){ 
        console.log(`hi ${this.username} , welcome to the website`)
        console.log(this) 
    }
} 

// user.print()
user.username = "dani"
// user.print()
// console.log(this)
// console.log(user)

// function chai (){
//     let username = "daniyal"
//     console.log(this.username)
// }

// chai() //(this) cannot be used without being in object here

const chai = function(){
    let username = "daniyal"
    console.log(this.username)
}
chai()

// const chai = () => {
//     let username = "daniyal"
//     console.log(this)
// }
// chai()

// const addTwo = (num1, num2) =>  num1 + num2

// return keyword not used when curly brackets used => explicit retun

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "daniyal"})

// console.log(addTwo(5,6))

