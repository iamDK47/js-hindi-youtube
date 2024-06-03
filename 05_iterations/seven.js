const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumber.map( val => val+10)
// console.log(newNums)

// const newNums = myNumber.forEach( val => val + 10)
// console.log(newNums)

// const newNums = myNumber.filter( val => val + 4)
// console.log(newNums)

const newNum = myNumber
                .map(val => val * 10 )
                .map(val => val + 1 )
                .filter(val => val >= 40 )

 console.log(newNum)