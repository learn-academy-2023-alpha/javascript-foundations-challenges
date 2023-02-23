// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Pseudocode:Create a function myCoffee
// input : drinkcoffee, keep working
// output: return "returns "drink coffee" if you are tired and "keep working" if you are not tired."

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
const myCoffee = (string) => {
    if (string === "tired")
        return  "drink coffee if you are tired"
    else if (string === "not tired")
       return "keep working"

}
   

describe("myCoffee", () => {
    it("returns a statement with if tired or keep working", () => {
      expect(myCoffee("tired")).toEqual("drink coffee if you are tired")
      expect(myCoffee("not tired")).toEqual("keep working")
    })
  })

// Create the function that will make the test pass.

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
//Pseudocode: Create a function called myStres
// input: relaxed ,keep going as "strings"
// output : returned relaxed if you are stressed and keep going if you are not stressed

const myStress = (string) => {
    if (string === "you are stressed")
        return  "relax"
    else if (string === "you are not stressed")
       return "keep going"
}

describe("myStress", () => {
    it("returns relaxed if you are stressed and keep going if you are not stressed", () => {
        expect(myStress("you are stressed")).toEqual("relax")
        expect(myStress("you are not stressed")).toEqual("keep going")
    })
})

// Create the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.
//Pseudocode: Create a function myBudget
//Input: a number
//Output: returns in budget if price is lower than 300$
const myBudget = (number) => {
    if (number < 300)
        return "in budget"
}
describe("myBudget", () => {
    it("in budget if price is lower than $300", () => {
        expect(myBudget([number])).toEqual("in budget")
    })
})

// Create the function that will make the test pass.
// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.
// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
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