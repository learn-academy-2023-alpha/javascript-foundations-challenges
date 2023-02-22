// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// Pseudo code: 
// input: an array of numbers
// output: array with all values * 3
// create a function mult3
// declare new variable newArray = []
// iterate through array (for loop)
// return values in new array multiplied by 3


const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]

const mult3 = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 3)
    }
    return newArray
}
console.log(mult3(testArr1))


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// Pseudo code: 
// input: an array of numbers
// output: array with only odd
// create a function onlyOdd
// declare new variable newArray = []
// iterate through array (for loop)
// conditional statement to only push odd numbers into newArray
// return values in new array with just the odd numbers

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]

const onlyOdd = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(onlyOdd(testArr2))




// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
// // output: "nicework"

// Pseudo code: 
// create new function onlyLetters
// declare new variable newString
// iterate through array (for loop)
// conditional statement to only push strings to newString
// switch array of strings to one string using mutator method .join("")

const onlyLetters = (array) => {
    let newString = []
    for (let i=0; i<array.length; i++) {
        if (typeof array[i] === "string") {
            newString.push(array[i])
        }
    }
    return newString
}
console.log(onlyLetters(comboArr).join(""))



// Create a function that takes in an array of numbers and returns the sum.

const addThese1 = [1, 2, 3, 4]
// output: 10

// Pseudo code:
// input: array of numbers
// output: return sum of numbers in array
// create a function addTogether 
// declare new variable sum
// iterate through array (for loop)
// return the sum 10
const addThese2 = [] // // output: 0
const addTogether = (array) => {
    let sum = []
    for (let i=0; i<array.length; i++) {
        sum.push(array[i])
    }
    return sum
}

console.log(addTogether(addThese1).reduce((partialSum, a) => partialSum + a, 0))

console.log(addTogether(addThese2).reduce((partialSum, a) => partialSum + a, 0))


// Create a function that takes in an array of numbers and returns the index of the largest number.

// pseudo code:
// create a function largestNum 
// declare new variable 
// iterate through array
// return index of largest number

const indexHighestNumber = [1, 4, 2, 3]
// // output: 1

=======
// const addThese1 = [1, 2, 3, 4]
// // output: 10

// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1


