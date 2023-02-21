// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]
const mult3 = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i] * 3)
    }
    return newArray
}

console.log(mult3(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]

const oddArray = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        if (Math.abs(array[i] % 2) === 1){
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(oddArray(testArr2))

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

// output: "nicework"

const stringArray = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === "string"){
            newArray.push(array[i])
        }
    }
    return newArray.join("")
}

console.log(stringArray(comboArr))

//   Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
//   // output: 10
  
const addThese2 = []
//   // output: 0

const addedString1 = (array) => {
    if(array.length < 1){
        return 0
    }
    let newValue = array[0]
    for (let i = 1; i < array.length; i++){
        newValue += array[i]
    }
    return newValue
}

console.log(addedString1(addThese1))
console.log(addedString1(addThese2))

//   Create a function that takes in an array of numbers and returns the index of the largest number.
//   const indexHighestNumber = [1, 4, 2, 3]
//   // output: 1