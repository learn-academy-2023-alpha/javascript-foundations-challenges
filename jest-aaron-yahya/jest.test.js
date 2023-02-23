// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.
// Pseudo: create a function called tiredOrNot that takes in a parameter and returns returns "drink coffee" if you are tired and "keep working" if you are not tired.
// const tiredOrNot = (string) => {
//  if (string === "tired") {
//         return "drink coffee"
//     }
//     else if (string === "not tired")
//     {
//         return "keep working"
//     }
//     else { return "invalid input"}
// }

// describe("tiredOrNot", () => {
//     it("returns 'drink coffee' if tired and 'keep working' if not tired", () => {
//         expect(tiredOrNot("tired")).toEqual("drink coffee")
//         expect(tiredOrNot("not tired")).toEqual("keep working")
// })
// })

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.
// Pseudo: create a function called relaxedOrNot that takes in a parameter and returns returns "relax" if you are stressed and "keep going" if you are not stressed.
// const relaxedOrNot = (string) => {
//      if (string === "stressed") {
//             return "relax"
//         }
//         else if (string === "not stressed")
//         {
//             return "keep going"
//         }
//         else { return "invalid input"}}

// describe("relaxedOrNot", () => {
//         it("returns 'relax' if stressed and 'keep going' if not stressed", () => {
//             expect(relaxedOrNot("stressed")).toEqual("relax")
//             expect(relaxedOrNot("not stressed")).toEqual("keep going")})})

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.
// Pseudo Code: Create a function called inBudget that takes in a price (a number). Using a conditional statement, if the price is lower than 300, returns 'in budget' (string) if greater than or equal to 300, return 'not in budget'

// describe("inBudget", () => {
//     it("Describes whether a price is within the budget of $300", () =>{
//         expect(inBudget(100)).toEqual("in budget")
//         expect(inBudget(301)).toEqual("not in budget")
//     })
    
// })

// const inBudget = (price) => {
//     return price < 300 ? "in budget" : "not in budget"
// }


// Write the test for a function that takes in two numbers and returns the smaller number.
//PseudoCode: Create a function called smallerNum that takes in two numbers as arguments and uses a conditional to return the lower number

// describe("smallerNum", () =>{
//     it("Returns the smaller of two numbers", () => {
//         expect(smallerNum (5, 0)).toEqual(0)
//         expect(smallerNum (390923049203598, 2342394)).toEqual(2342394)
//         expect(smallerNum (3, 3)).toEqual("the numbers are equal")
//     })
// })

// Create the function that will make the test pass.

// const smallerNum = (num1, num2) => {
//     if (num1 === num2){
//         return "the numbers are equal"
//     } else return num1 < num2 ? num1 : num2
// }



// Write the test for a function that takes in one numbers and returns whether the number is odd.
//Pseudocode: create a function called isItOdd that takes in a number and uses a conditional to determine if the number is odd and returns a string of "the number is odd" of odd, "the number is even" if even, and returns "the number is zero" if zero
// const isItOdd = (num) => {
//     if (num === 0) {
//         return "The number is 0"
//     }
//     else return num % 2 !== 0 ? "The number is odd" : "The number is not odd"
// }
// describe("isItOdd", () => {
//     it("Describes whether an inputted number is odd", () => {
//         expect(isItOdd(1)).toEqual("The number is odd")
//         expect(isItOdd(2)).toEqual("The number is not odd")
//         expect(isItOdd(0)).toEqual("The number is 0")
//     })
// })


// Create the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
// Pseudo: create a function called fruitColorChecker that takes in a a fruit (string) and using a conditional returns the color of that fruit.
// const fruitColorChecker = (fruit) => {
//     if (fruit === "banana"){
//         return "yellow"
//     }
//     else if (fruit ==="apple"){
//         return "red"
//     }
//     else if (fruit === "grape"){
//         return "purple"
//     }
//     else return "Thats not fruit"
// }

// describe("fruitColorChecker", () => {
//     it("Returns the correct color of fruit", () => {
//         expect(fruitColorChecker("banana")).toEqual("yellow")
//         expect(fruitColorChecker("apple")).toEqual("red")
//         expect(fruitColorChecker("grape")).toEqual("purple")
//     })
// })

// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
// Pseudo: create a function called rick that return morty
const rick = () => {
    return "Morty"
}

describe("rick", () => {
    it("Returns the Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.