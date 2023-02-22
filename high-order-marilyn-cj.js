// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// Pseudo code: 
// -create function named mult10 
// -take in every index of an array and multiply each value by 10 
// -return new array with new values using .map()


const arr1 = [3, 9, 15, 4, 10]
const mult10 = (array) => {
    return array.map(value => {
        return value * 10
    }) 
}
console.log(mult10(arr1))
// // output: [30, 90, 150, 40, 100]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// Psuedo code:
// -create a function oddArr 
// -take in array of numbers and use .filter() to return only the odd value

const arr2 = [2, 7, 3, 5, 8, 10, 13]
const oddArr = (array) => {
    return array.filter(value => {
        return value % 2 !== 0
    })
}
console.log(oddArr(arr2))
// // output: [7, 3, 5, 13]



// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

// Pseudo code:
// -create a function lettersOnly that takes in an array with multiple data types
// -use .filter() to return an array with only letters 
// convert the array into a string using .join("")

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

const lettersOnly = (array) => {
    return array.filter(value => {
        return typeof value === "string"
    }).join("")
}
console.log(lettersOnly(comboArr))
// // output: "nicework"


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

// Pseudo code: 
// create function newArray that takes in an array with multiple data types
// use .filter() to return an array with only true values (without false, null, 0, or blank values)


const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]
const newArray = (array) => {
    return array.filter(value => {
        return !!value 
    })
}
console.log(newArray(filterArrayValues))

// create new variable vowels with an array of strings of vowels
// Create a function that takes in a string and returns a new string with all the vowels removed.
// create function noVowels that takes in a string
// use .split() to convert the string into an array
// return an array with only constanants using .filter() and .includes()
// convert array back into string using .join()

const str = "javascript is awesome"
const vowels = ["a", "e", "i", "o", "u", "y"]

const noVowels = (string) => {
    return string.split("").filter(value => {
        return !vowels.includes(value)
    }).join("")
}
console.log(noVowels(str))
// output: "jvscrpt s wsm"


// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// Psuedo code:
// -create function arrayAdded that takes in two arrays as arguments
// use .concat() method to merge two arrays together
// use .filter() to return an array with no duplicate values


const arr3 = [3, 7, 10, 5, 4, 3]
const arr4 = [7, 8, 2, 1, 5, 4]

const arrayAdded = (array1, array2) => {
    const combinedArray = array1.concat(array2)
    return combinedArray.filter((value, index) => {
        return combinedArray.indexOf(value) === index
    }
    )
}
console.log(arrayAdded(arr3, arr4))
// output: [3, 7, 10, 5, 4, 8, 2, 1]