// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// pseudo code.
// Create a function called muliple3
// create new array variable
// mutiple3 is going to take an array of numbers into a four loop
// the for loop is going to itterate through the array
// the loop is going to multiply each value by 3 then push the new values into a new array

// var  arrayOfNums = [3, 9, 15, 4, 10]
// const mult3 = (array) => {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i] * 3)
//     }
//     return newArray
// }
// console.log(mult3(arrayOfNums));
// const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]

// pseudo code.
// Create a function called onlyOdd
// onlyOdd is going to take an array of numbers into a four loop
// create new array variable
// the for loop is going to itterate through the array
// There will be a conditional inside the for loop thats says if the number is odd it will return the number into a new Array

// const onlyOdd = (array) => {
//     let newOdd = []
//     for (let i =0; i < array.length; i ++) {
//         if (array[i] % 2 !== 0) {
//             newOdd.push(array[i])
//         }
//     }
//     return newOdd    
// }

// console.log(onlyOdd(testArr2));
// 

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// const comboArr = [
//   7,
//   "n",
//   true,
//   "i",
//   "c",
//   10,
//   "e",
//   -388,
//   "w",
//   3,
//   "o",
//   0,
//   "r",
//   false,
//   "k"
// ]
// output: "nicework"



// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// output: 10

// const addThese2 = []
// output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// output: 1