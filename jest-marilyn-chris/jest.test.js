// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create a function testTired that evaluates whether you should continue drinking coffee
// Input - "tired" or "not tired" (string)
// Output - "drink coffee" if tired or "keep working" if not (string)
describe("testTired", () =>{
    it("evaluates whether you should continue drinking coffee", () => {
        expect(testTired("tired")).toEqual("drink coffee")
        expect(testTired("Not tired")).toEqual("keep working")
    })
})

// Create the function that will make the test pass.
// The function takes a parameter fatigue, formatted as a string, then uses a series of if/else if/else logic to provide the appropriate response
const testTired = (fatigue) => {
    // Force the input string to all lowercase, allowing variation in the input
    fatigue = fatigue.toLowerCase()
    if(fatigue == "tired"){return "drink coffee"}
    else if(fatigue == "not tired"){return "keep working"}
    else{return "error"}
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create a function testStressed that evaluates whether you should relax
// Input - "stressed" or "not stressed" (string)
// Output - "relax" if stressed or "keep going" if not (string)
describe("testStressed", () =>{
    it("evaluates whether you should relax", () => {
        expect(testStressed("stressed")).toEqual("relax")
        expect(testStressed("Not stressed")).toEqual("keep going")
    })
})

// Create the function that will make the test pass.
// The function takes a parameter stress, formatted as a string, then uses a series of if/else if/else logic to provide the appropriate response
const testStressed = (stress) => {
    // Force the input string to all lowercase, allowing variation in the input
    stress = stress.toLowerCase()
    if(stress == "stressed"){return "relax"}
    else if(stress == "not stressed"){return "keep going"}
    else{return "error"}
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
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