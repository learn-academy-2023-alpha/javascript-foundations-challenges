// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // // output: [30, 90, 150, 40, 100]


// const mult10 = (array) => {
//     return array.map(value => value * 10)}

// console.log(mult10(arr2))
    
// pseudo code: make a constant for the multiplier (mult10) that is equal to the array and will return the array .map() by the value arrow function the value times (*) ten(10). 


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // // output: [7, 3, 5, 13]

// const onlyOdd = (array) => {
//     return array.filter(value => value % 2 !== 0)
    
// }

// console.log(onlyOdd(arr2))

// Pseudo code: creat a constant variable for the odd numbers (onlyOdd) that is equal to the array as a perimeter and the arrow function returns the perimeter .filter() of the current value and declares if the value is odd. 


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// const onlyStrings = (array) => {
//     return array.filter(value => typeof value === 'string').join('')
// }
// console.log(onlyStrings(comboArr))

// Pseudo code: create a constant variable that take and array as parameter for the 'strings' (onlyStrings) and return the array .filter () by typeof the value be strictly equeal to 'string' and then .join('') the array.  

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]


const onlySelected = (array) => {
    return array.filter(value => value !== false && value !== null && value !== 0 && value !== "")
   
  
}
console.log(onlySelected(filterArrayValues))

// pseudo code:
//  input: an array with mixed data types
//  ouput: and array with numbers > 0, strings with a value grater than 0, only Boolean true, and no null.
//  create a functon that takes the array 
//  .filter() the values we don't want in the array



// 🏔 Stretch Goals


// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"



// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]