// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// Pseudo Code:
// Create a function using built in function .map to iterate through the given array (arr1) and multiple
// all indexs by 10
// return the new array that was multiplied by 10

 const arr1 = [3, 9, 15, 4, 10]
    const newArray = arr1.map((value)=> {
        return value *10
    })
    console.log(newArray)
// --> [30, 90, 150, 40, 100]


//     Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// Pseudo Code:
//  Create a function that takes in an arguement of the given array (arr2).
//  use a higher order function of .filter with the given array
// then create a conditional statement of the value % 2 !== 0 which will return all odd numbers in the array
// return new array with only odd numbers

const arr2 = [2, 7, 3, 5, 8, 10, 13]
    const oddFunction = (array) => { return array.filter((value) => value % 2 !== 0 )}
    console.log(oddFunction(arr2))
// --> [7, 3, 5, 13]


//     Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// Pseudo Code: Create a higher order function called "filterArray" that takes an argument of the given array (comboArr)
// use the built in method of .filter to make a conditional statement of value === "string" which will remove all values that arnt a string
return new array with all numbers removed
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
const filterArray = (input) => {
    return input.filter((value) => {
        return typeof value === "string"
    })
}
console.log(filterArray(comboArr).join(""))
// --> "nicework"


//     Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

// Pseudo Code:
// create a higher order function that takes in the given array of multiple types of data (filterArrayValues).
// then use built in method .filter to create a conditional statement to remove all values that are false, null, 0 or blank  values(empty string)
// return new array without empty string, null, false or zero

const filterArrayValues = [58, "", "abcd", true, null, false, 0]
const whateverArray = (input) => {
    return input.filter((value) => {
        return value !== "" && value !== null && value !== false && value !== 0
    })
}
console.log(whateverArray(filterArrayValues))
// --> [58, "abcd", true]


// :snow_capped_mountain: Stretch Goals
//     Create a function that takes in a string and returns a new string with all the vowels removed.

// Pseduo code: 
//  We found two methods to make this work:

// -----First method----: create a function that takes in the string 
// and use the built-in-method .replace and give it an argument of all vowels that you want removed
// syntax for this method is .replace(/[<all values you want removed>]/gi, '')
// and return string with replaced values (in our case, vowels)

// -----Second Method----: create a higher order function and takes in the given string (str)
// then create a new array and use the built-in-method . split to place this string as an array
// then return the the new array after using the built in method .filter as a function to then use
// a conditional statement to remove all vowels
// return the new array with out the vowels.

const str = "javascript is awesome"

----- First method-----
const vowelDeleter = (input) => {
     const newString = input.replace(/[aeiou]/gi,'')
     return newString
 }
 console.log(vowelDeleter(str))

-----Second method------
const noVowels = (input) => {
const emptyArray = input.split("")
    return emptyArray.filter((value) => {
        return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
    })
}
console.log(noVowels(str).join(""))
// --> "jvscrpt s wsm"


// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// Pseudo Code:
// create a higher order function that takes in both given arrays as arguments (arr1, arr2)
// create a new empty array using let
// populate the new array with both given arrays using  built-in method .concat
// then create the higher order function using .filter that takes in both the value and the index
// use a conditional statement with filter, along with BIM .indexOf that takes in the the 
// index and make it strictly equal (===) to the value and return only those values.
// return the new array by invoking the higher order function and placing with given arrays for the arugments
const arr1 = [3, 7, 10, 5, 4, 3]
const arr2 = [7, 8, 2, 1, 5, 4]
const noDupeArray = (array1, array2) => {
    let newArray = []
    newArray = array1.concat(array2)
    return newArray.filter((value, index) => {
        return newArray.indexOf(value) === index
    })
}
console.log(noDupeArray(arr1, arr2))
// --> [3, 7, 10, 5, 4, 8, 2, 1]