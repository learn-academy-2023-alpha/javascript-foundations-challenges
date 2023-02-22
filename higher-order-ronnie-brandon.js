// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.


// Pseudocode: by using .map built in method it went through every iteration in arr1 without altering the original and executes the return (value) multiplied by 10. 

const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]

const multiplier = (array) => {
    return array.map((value) => value * 10)
}
console.log(multiplier(arr1))
// --> [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// Pseudocode: creating the function onlyOdd it takes the parameter (array) and filters it with the built in method .filter (which iterates through the array and returns a value that meets the given condition) It compares the value and if it is not evenly divisible by 2 it outputs that value since it is odd.

const arr2 = [2, 7, 3, 5, 8, 10, 13]

const onlyOdd = (array) => {
    return array.filter((value) => value %2 !== 0)
}

console.log(onlyOdd(arr2));
//--> [7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.


const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

const myData = (string, dataType1, dataType2) => {
    return string.filter(value => {
        return typeof value === dataType1 || typeof value === dataType2
    }).join("")
}
console.log(myData(comboArr, "string"));

//--> "nicework"


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

const filterArrayValues = [58, "", "abcd", true, null, false, 0]

const showMyData = (array) => {
    return array.filter(value => {
        return value !== false && value !== 0 && value !== null && value !== ""
    })
}
 console.log(showMyData(filterArrayValues))

// output: [58, "abcd", true]
// console.log(typeof null) 
// --> object