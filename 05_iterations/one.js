// for

// for (let index = 0; index <= 10 ; index++) {
//     console.log(index)    
// }

// for (let i = 0; i <= 10 ; i++) {
//     console.log(`outer loop i ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop j ${j} and inner loop i ${i}`)
//         console.log( i + '*' + j + '=' + i*j )
//     }
// }

// let myArray = ["batman", "superman", "spiderman"]
// console.log(myArray.length)
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
// }

// break and continue -> break loops

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log("5 detected")
//         break
//     }
//     console.log(`value of i is ${index}`)   
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("5 detected")
        continue
        // using continue will not print 5, without continue 5 will be printed
    }
    console.log(`value of i is ${index}`)

}