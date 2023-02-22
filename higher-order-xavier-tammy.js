
//Psuedocode : expected input will be an array of numbers and the expected outcome will be an new array with all of the numbers multiplied by 10. We will want to use an .map command to iterates through the array and returns a new array of the same length.  We will use .map instead for loop for effeciency.
// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // expected output: [30, 90, 150, 40, 100]
// // actual output :   [ 30, 90, 150, 40, 100 ]

// const mappedArray = arr1.map((value) => {
//     return value * 10
// })
// console.log(mappedArray)



// psuedocode: expected input will be an array of numbers and expected output wil be an new array with only odd numbers. We will used an conditional within an function.  Used for loop for intial output, allowed for troubleshooting and reattempt with .filter method. .filter iterates through an array and returns a new array with only the vaules that satisfy the stated condition, that being only odd numbers. 
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// //expected output: [7, 3, 5, 13]

// const tooOdd = (array) => {
//     const newArray = []
//     for (let i=0;i < array.length; i++) {
// if (array[i] % 2 !==0)
// newArray.push(array[i])
//     } return newArray
// } 
// console.log (tooOdd(arr2))

// const onlyOdd = arr2.filter((value) => {
//     return (value % 2 !==0)
// } ) 
// console.log (onlyOdd)
 
// actual output : [ 7, 3, 5, 13 ]

    
// psuedocode: expected input will be an array of numbers and letters and the expected output will return as a string with only the letters. Used .filter method to filter out the string data type and join it togther to create an string from an array.

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// const stringArray = comboArr.filter(value => {
//  return typeof value == "string"
// }) 
// console.log (stringArray.join(""))
// actual output : "nicework"
   


// pseudocode : expected input will be an array of various data types. expected output will be an array consisting of only strings, numbers, and boolean values.We will use .filter method to iterate through the array and return an new array with only targeted values. We used keyword boolean to filter out falsy values such as 0, null, and strings with no characters. need further clarfication why boolean value does not filter truthy values- will ask learn staff and conduct further research. √
// Create a function that takes in an array and returns an array without any false, null, 0, or blank values. 
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]
// actual output: [58, "abcd", true]

const noBs = (array) =>  {
    return array.filter(Boolean)
} 
console.log(noBs(filterArrayValues))
