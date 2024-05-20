const accountId = 1 
let accountEmail = "daniyalkamran@gmail.com"
var accountPassword = "2"
accountCity = "Lahore"
let accountState 

//accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "2121"
accountCity = "Karachi"

console.log(accountId);

/*
Dont use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])