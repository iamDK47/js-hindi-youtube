const promisesOne = new Promise(function(resolve , reject){
    // Do a async task
    // DB calls, cryptography, networking
    setTimeout(function(){
        // console.log("function is complete")
        resolve()
    },1000)
})

promisesOne.then(function(){
    // console.log("promise is done")
})

// +++++++

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task completed")
        resolve()
    },2000)
}).then(function(){
    console.log("promise consumed")
})

// +++++++

