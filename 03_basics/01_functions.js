function sayMyName(){
    console.log('d');
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("y");
    console.log("a");
    console.log('l');
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     console.log(number1 + number2)
//     return result
// }

// const result = addTwoNumbers(3,4)

// console.log("result:", result)

function calculateCartPrice (val1, val2, ...num1){
    
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 8000));


const user = {
    username: "daniyal",
    age: 24
}

function handleObject(user){
    console.log(`the name of the user is ${user.username} and his age is ${user.age}`);
}

// handleObject(user) 

const myNewArray = [200, 400, 100, 500]

function val2 (getArray){
    return getArray[1]
}
console.log(val2(myNewArray));