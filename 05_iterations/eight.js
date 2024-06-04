const myNum = [1,2,3,4,5]

// const newNum = myNum.reduce( function (accumulator,curval) {
//     console.log(`is mein acc val ${accumulator} or baki curval ${curval}`)
//     return accumulator + curval
// }, 0)

// const newNum = myNum.reduce( (accumulator,currentval) => (accumulator + currentval), 0)
// console.log(newNum)

const shoppingCart = [
    {
        cource: "python",
        price: 2000
    },
    {
        cource: "JS",
        price: 3000
    },
    {
        cource: "data",
        price: 6000
    },
    {
        cource: "science",
        price: 1000
    },
]

const shopping = shoppingCart.reduce( (accumulator, item) => (accumulator + item.price), 0)
console.log(shopping)