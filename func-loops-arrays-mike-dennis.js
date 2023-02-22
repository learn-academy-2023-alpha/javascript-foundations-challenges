//Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]
//pseudocode:
const numberArray = (array) => {        //creating a function called numberArray and putting array in paramater.
let newArray = []                       //creating empty array called newArray
for(let i = 0; i < array.length; i++){  // for loop to iterate through the array
newArray.push(array[i] * 3)             // multiplying the value at the given index in the array by 3 and using push method to push into empty array
}   
return newArray                         // returning [ 9, 27, 45, 12, 30 ] new array.
}
console.log(numberArray(testArr1))      // invoking function

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]        
// output: [-7, 3, 5, 13]

const oddArray = (array) => {           //creating a function called oddArray and putting array in parameter
    let unevenArray = []                // creating empty array called unevenArray
    for(let i = 0; i < array.length; i++){      // for loop to iterate through array
        if (array[i] % 2 === -1 || array[i] % 2 === 1){     //if the remainder of the array is === -1 or 1 this statement will
            unevenArray.push(array[i])
        }
    }
    return unevenArray
}
console.log(oddArray(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the 
// letters. HINT: use the typeof method.

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

  const comboArrays = (array) => {
    let theNiceArray = []
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === "string"){
            theNiceArray.push(array[i])
        }
    }
    return theNiceArray.join("")
  }
  console.log(comboArrays(comboArr))