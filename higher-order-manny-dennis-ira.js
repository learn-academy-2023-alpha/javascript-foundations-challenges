// // Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]
// const mult10 = arr1.map(value => {
//     return value * 10

// })
// console.log(mult10) [ 30, 90, 150, 40, 100 ]


// // Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// output: [7, 3, 5, 13]
const oddNumbers =  arr2.filter(value  => {
    return value % 2===1

// })
// console.log(oddNumbers) [ 7, 3, 5, 13 ]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"
const newArray = (array) => {
    return array.filter(value => {
        return typeof value === "string" 
    }).join("")

}
console.log(newArray(comboArr))
// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]
const newArray1 = (array) => {
    return array.filter(value =>   {
        return typeof value !== array
})
}
console.log(newArray1(filterArrayValues))
