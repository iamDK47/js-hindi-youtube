// singleton

// object literals
// Object.create

const mySym = Symbol("Key1")

const JsUser = {
    name: "Daniyal",
    "full name": "Muhammad Daniyal",
    age: 18,
    // mySym: "mykey1",
    [mySym]: "mykey11",
    location: "lahore",
    email: "daniyalkamran@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
// console.log(typeof JsUser.mySym);

JsUser.email = "daniyalkamran47@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "daniyalkamran33@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());