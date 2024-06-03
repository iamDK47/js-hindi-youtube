const myObj = {
    Cpp: "C++",
    Rb: "Ruby",
    Py: "Python",
    Js: "JavaScript",
}

// for (const obj of myObj) {
//     console.log(obj)
// }

for (const key in myObj) {
    // console.log(myObj[key])
    // console.log(`${key} is shortcut for ${myObj[key]}`)
}

const programming = ["js", "rb", "py", "cpp"]

for (const key in programming) {
    // console.log(key)
    console.log(programming[key])
}
// main diff bw forin & forof is direct printing of keys and values
// main diff bw object and array is arr has automatic keys from 0 here