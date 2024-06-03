// for of

// const array = [1,2,3,4,5]

// for (const arr of array) {
//     console.log(arr)
// }

const greeting = "heelo world"
for (const gree of greeting) {
    // console.log(`hi broski ${gree}`)
}

const map = new Map()

map.set('IN',"India")
map.set('PK',"pakistan")
map.set('US',"America")

//  console.log(map)

for (const [key, value] of map) {
    console.log(key, ":-", value)
}