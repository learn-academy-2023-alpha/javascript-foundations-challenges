// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// pseudo code: create a function called mult10. Use the map function to return a new array with all numbers multiplied by 10.

// const mult10 = (array) => {
//     return array.map((value) => {
//        return value * 10
//     })
// }
// console.log(mult10(arr1))

// output: [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// pseudo code: create a function named onlyOdd that takes an array as an input. Using the filter higher order function return a new array containing only odd numbers.

// const onlyOdd = (array) => {
//    return array.filter((value) => value % 2 !== 0)
// }

// console.log(onlyOdd(arr2))

// output: [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// pseudo code: create a function called onlyLetters that takes in an array of mixed values and uses the filter function to create an array of letters. Then use the join function ot return the array as a string.
// const onlyLetters = (array) => {
//     return array.filter((value) => typeof value === "string").join("")
// }

// console.log(onlyLetters(comboArr))

// output: "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// pseudo code: create a function called arrayFilter that takes in an array of multiple values. Using the filter function return a new array with no false, null, 0, or blank values.

// const arrayFilter = (array) => {
    // return array.filter((value) => value !== null || 0 || false || "") // --> [ 58, '', 'abcd', true, false, 0 ]
    // return array.filter((value) => value !== null && value != 0 || false || "") // --> [ 58, 'abcd', true ] This works too!
    // return array.filter((value) => value != (0 || false || "") && value !== null) // --> [ 58, 'abcd', true] This one works!
    // return array.filter((value) => value != (0 || false || "" && null)) // -->  [58, '', 'abcd', true, false, 0 ]
// }

// console.log(arrayFilter(filterArrayValues))
// console.log(null == null)
// output: [58, "abcd", true]

// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// pseudo code: create a function removeVowels that takes a string as an input. Turn the sting into an array using the split method. On the array use the filter method to output a new array without the vowels. Finally user join to join it into a new string.

// const removeVowels = (string) => {
//     let vowelsArr = ["A", "a", "E", "e" , "I" , "i" , "O" , "o" , "U" , "u"]
//     return string.split("").filter(value => !vowelsArr.includes(value)).join("")
// }

// console.log(removeVowels(str))

// output: "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3]
const arr2 = [7, 8, 2, 1, 5, 4]
//pseudo code: create function noDupe that takes in two arrays as arguments. 
//Concat the two arrays into a new array called arrCombined. 
//Push each element of the arrCombined array into a new array arrNoDupe using the conditional to determine if the number is already present in the array.

// const noDupe = (arr1, arr2) => {
//     let arrCombined = [arr1.concat(arr2)]
//     let arrNoDupe = []
//     arrCombined.map((value) => {
//         if(arrNoDupe.includes(value) == false){  
//             arrNoDupe.push(value)
//             console.log(arrNoDupe)
//         } else if(arrNoDupe.includes(value) == true){
//             // console.log(arrNoDupe)
//         }
//     })
//     return arrNoDupe
// }
let combArray = arr1.concat(arr2)
console.log(combArray)
// A Set is a collection of unique values, it will implicitly remove duplicate values
// concat arr2 onto arr1 
// create a new set with the combined array
// let noDupe = [...new Set(combArray)]
// console.log(noDupe)
// output: [3, 7, 10, 5, 4, 8, 2, 1]

// We were trying to use the map function combined with a conditional, when we could have just used the forEach with a conditional to push the values into a new array
let noDupe = []
combArray.forEach((parameter) =>{
    if(!noDupe.includes(parameter)){
        noDupe.push(parameter)
    }
})
console.log(noDupe)

