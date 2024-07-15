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
    // console.log("promise consumed")
})

// +++++++

const promiseThree = new Promise(function(resolve,reject){
    setTimeout( function(){
        resolve({unername : "daniyal" , ID : "2222"})
    }, 3000)
})

promiseThree.then(function (user){
    // console.log(user)
})

// +++++++

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username : "daniyal" , ID : "123"})
        } else {
            reject("error: wrong id")
        }
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
})