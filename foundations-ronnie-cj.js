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
// output: [ 9, 27, 45, 12, 30 ]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]

const oddNumber = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0){
            newArray.push(array[i])
        }
    }   
    return newArray
}
console.log(oddNumber(testArr2));
// output: [ -7, 3, 5, 13 ]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

const comboArr = [ 7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k" ]
// // output: "nicework"

const letterSort = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === "string"){
            newArray.push(array[i])
        }
    }  
    return newArray.join("")
}
console.log(letterSort(comboArr));

// output: "nicework"


// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// // output: 10

const adder = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}

console.log(adder(addThese1));
// output: 10

const addThese2 = []
// // output: 0

console.log(adder(addThese2));
// output: 0

// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// // output: 1

const largestNum = (array) => {
    let highest = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] > highest){
            console.log(array[i]);
            let highest = array[i]
        }
    }
    return highest
}

console.log(largestNum(indexHighestNumber));

// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// // output: [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

// const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

// const addUp3 = 600
// // output: 180300

// 🏔 Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
