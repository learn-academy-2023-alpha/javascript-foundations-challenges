// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
//psuedo code:

 const testArr1 = [3, 9, 15, 4, 10]
 
 var newArray = []

 const multiplied = (array) => {
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i] *3 )
    }
    return newArray
 }
 console.log(multiplied(testArr1))
// --> [ 9, 27, 45, 12, 30 ]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
//psuedo code:

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
var oddArray = []

const oddFunction = (odd) => {
    for(let i =0;i<odd.length; i++){
        if(odd[i] % 2 != 0){
            oddArray.push(odd[i])
        }
    }

    return oddArray
}

console.log(oddFunction(testArr2))
// --> [-7, 3, 5, 13]

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

var stringArray = []


const stringFunction = (words) => {
    for(let i = 0; i< words.length; i++){
        if(typeof words[i] == "string" ){
            stringArray.push(words[i])
        }
    }
    return stringArray
}

console.log(stringFunction(comboArr))
// --> [
//   'n', 'i', 'c',
//   'e', 'w', 'o',
//   'r', 'k'
// ]

// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
var sumOfArray = 0

const sumFunction = (sum) => {
    for(let i = 0; i<sum.length; i++){
        sumOfArray = sumOfArray + sum[i] 
    }
    return sumOfArray
}

console.log(sumFunction(addThese1))
// --> 10

const addThese2 = []
var num= 0

const arraySum = (sum) => {
    for(let i = 0; i<sum.length; i++){
        num = num + sum[i] 
    }
    return num
}

console.log(arraySum(addThese2))
// --> 0

// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]


const largestFunction = (num) => {
    var largest = num.indexOf(Math.max)

    return largest
}

console.log(largestFunction(indexHighestNumber))

// --> 1

// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
 const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]

var newArray = []

const arrays = (array1, array2) => {
newArray = arr1.concat(arr2)

//this was from google... still trying to understand how it works.
return newArray.filter((item,index) => newArray.indexOf(item)===index)

}

console.log(arrays(arr1,arr2))
// --> [3, 7, 10, 5, 4, 8, 2, 1]


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