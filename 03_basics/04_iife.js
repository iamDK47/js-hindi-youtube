// Immediately Invoked Function Expression

(function chai(){
    // named iife
    console.log("DB Connected")
})
(),

// ()() ,  first paranthesis is the definition and second is the execution of function ALSO , is imp to end an iife

( () => {
    // unnamed iife
    console.log("DB Connected")
}) (),

( (name) => {
    console.log(`DB Connected ${name}`)
}) ("daniyal")

// iife used to clear global polution