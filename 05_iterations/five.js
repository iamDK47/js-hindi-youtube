const coding = ["Py", "Js", "cpp"]

// for (const key in coding) {
//     console.log(key)
// }

// for (const key of coding) {
//     console.log(key)
// }

// +++++++++++++

// coding.forEach( function(val) {
//     console.log(val)
// });
// coding.forEach( val => {
//     console.log(val)
// });
// No need to name function as these are call back functions

// ++++++++++++++

// function printMe(val){
//     console.log(val)
// }
// coding.forEach(printMe)

// ++++++++++++++

// coding.forEach( (val, index, array) => {
//     console.log(val, index, array)
// })

// coding.forEach( (lol, lolz,lulz) => {
//     console.log(lol, lolz, lulz)
// })

// +++++++++++++++

const myCoding = [
    {
        myLanguage: "Python",
        shortCut: "Py"
    },
    {
        myLanguage: "C++",
        shortCut: "cpp"
    },
    {
        myLanguage: "JavaScript",
        shortCut: "JS"
    }
]

myCoding.forEach( (val) => {
    console.log(val.myLanguage)
})
// myCoding.forEach( (val, index, s) => {
//     console.log(val.myLanguage, index, s)
// })