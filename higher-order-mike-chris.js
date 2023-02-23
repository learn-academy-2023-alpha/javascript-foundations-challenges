// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]
//create function, pass in array
const multTen = (array) => {
    //high-order function map method to multiply each value by 10 and return the array 
    return array.map(value => value * 10)
}
//log function and pass in test array
//console.log(multTen(arr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// output: [7, 3, 5, 13]

//create function, pass in array
const onlyOdd = (array) => {
    //higher order function that returns only odd values within the array
    return array.filter(value => value % 2 === 1)
}
//log function and pass in test array
//console.log(onlyOdd(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"

//create function and pass in array
const onlyLetters = (array) => {
    //higher order function that returns a joined string of the elements with a type of string
    return array.filter(value => typeof value === "string").join("")
}
//log function and pass in test array
//console.log(onlyLetters(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]

//create a function that takes in an array
// const filteredArray = (array) => {
//     //filter an array and returns values that are not false, zero, null, or blank values
//     return array.filter(value => value !== false && value !== null && value != 0 && value !== "")
// }
// //log function and pass in test array
// console.log(filteredArray(filterArrayValues))

//create a function and pass in two arrays
const flexibleFilter = (array1, array2) => {
    //return an array of values from the first array that are not found in the second array
    return array1.filter(value => array2.indexOf(value)=== -1)
}
//log function and pass in test array and test array with false, 0, null, ""
console.log(flexibleFilter(filterArrayValues, [false, null, 0, ""]))

// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// output: "jvscrpt s wsm"

//creat function and pass in a string
const noVowels = (string) => {
    //split a string into an array of characters, filter the array to only return consonants, re-join the filtered array into a string
    return string.split("").filter(value => value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u" && value !== "y").join("")
}
//log function and pass in test string 
//console.log(noVowels(str))

//create function and pass in string and array
const flexbileStringFilter = (string, array) => {
    //split a string into an array of characters, filter the new array to return values that are not in the paramter array, and join array back into a string 
    return string.split("").filter(value => array.indexOf(value) === -1).join("")
}
//log function and pass in test string and array of parameters
console.log(flexbileStringFilter(str, ["a", "e", "i", "o", "u"]))

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const arr3 = [3, 7, 10, 5, 4, 3]
const arr4 = [7, 8, 2, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]

// //create function that takes in two arrays
// const onlyUniques = (array1, array2) => {
//     //create a new array that concats the input arrays
//     let newArr = array1.concat(array2)
//     //filter the new array to return values only in their first occurrence 
//     return newArr.filter((value, index) => newArr.indexOf(value) === index)
// }
// //log the function passing in both test arrays
// console.log(onlyUniques(arr3, arr4))

//creat a function that takes in two arrays
const easyUniques = (array1, array2) => {
    //concats two arrays, transforms them into a set(by definition: a collection of unique values that removes all duplicates)
    //returns the set transformed back into an array
    return [...new Set(array1.concat(array2))]
}
//log function and pass in two test arrays
//console.log(easyUniques(arr3, arr4))
