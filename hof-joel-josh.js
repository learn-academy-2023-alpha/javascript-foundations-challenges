// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]

// const myArray = arr1.map((value) => {
//     return value *10
// })
// console.log(myArray);
//  output: [ 30, 90, 150, 40, 100 ]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13]

// const numbersArray = [1, 2, 7, 4, 10, 8, 9]

// const getOddsOnly = (bus) => {
//     return bus.filter((value) => {
//         return value % 2 !== 0
//     }) 
// }                                  
// console.log(getOddsOnly(numbersArray));

// output: [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

const lettNums = (array) => {
    return array.filter((value) => typeof value === "string").join("");
}

console.log(lettNums(comboArr));
// output: "nicework"
