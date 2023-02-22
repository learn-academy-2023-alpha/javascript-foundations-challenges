// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// Create a function called mult3 that passes argument of array
// returned newArr multiplied by 3 to get output

const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]
const mult3 = (array) => {
 let newArr = []
 for (let i = 0; i < array.length; i++) {
    newArr.push(array[i]*3)
 }
 return newArr


}
console.log(mult3(testArr1))
[ 9, 27, 45, 12, 30 ]

// // Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
const odd = (array) => {
    let newArr = [] 
    for (let i = 0; i < array.length; i++) {
         if (array[i] % 2 === 1) {
                newArr.push(array[i])
          }
        }
return newArr  
}
console.log(odd(testArr2))


   




// output: [-7, 3, 5, 13]