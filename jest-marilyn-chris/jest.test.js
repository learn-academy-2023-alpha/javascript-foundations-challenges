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
// Pseudo: 
// Create a function budgetTest that evaluates whether a price is in budget
// Input - "price" (number)
// Output - "in budget" if price <300 (string)

describe("budgetTest", () => {
    it("evaluates whether a price is in budget", () => {
        expect(budgetTest("299")).toEqual("in budget")
        expect(budgetTest(299)).toEqual("in budget")
        expect(budgetTest("$299")).toEqual("in budget") // failed initial test because it's not a number, passes final test
        expect(budgetTest(500)).toEqual("over budget")
    })
})

// Create the function that will make the test pass.
// Pseudo: Create function budgetTest takes a parameter price, formatted as a number, then uses a series of if/else logic to provide the appropriate response

const budgetTest = (price) => {
    let budget = 300 // create variable for budget 
    if(typeof price === "string"){  // check if user inputs a number or a string with "$" before the price
        price = price.replace("$", "")   // takes the string and removes the $ 
    }
    if(price < budget){
        return "in budget"
    } else if(price > budget){
        return "over budget"
    } else{
        return "error: enter price"
    }
}

// Write the test for a function that takes in two numbers and returns the smaller number.
// Pseudo: create function named numTest, takes in two numbers and evaluates which number is smaller
// input: two numbers 
// output: smallest number

describe("numTest", () =>{
    it("evaluates which number is smaller", () => {
        expect(numTest(50, 75)).toEqual(50)
        expect(numTest(100, 75)).toEqual(75)
        expect(numTest(10, 10)).toEqual(10)
    })
})

// Create the function that will make the test pass.
// Pseudo:
// create function named NumTest
// take in two numbers
// use built in method Math.min to return the smaller number

const numTest = (num1, num2) => {return Math.min(num1,num2)}

// this works too with our testing
// const numTest = (num1, num2) => {
//  if(num1 > num2){
//         return num2
//     } else if(num1 < num2){
//         return num1
//     } else if(num1 === num2){
//         return "these numbers are the same"
//     } else{
//         return "error"
//     }
// }


// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Pseudo: create function named oddTest, takes in one number and returns whether the number is odd
// input: one number
// output: Boolean response

describe("oddTest", () =>{
    it("returns whether the number is odd", () => {
        expect(oddTest(15)).toEqual(true)
        expect(oddTest(70)).toEqual(false)
        expect(oddTest(0)).toEqual(false)
        expect(oddTest("string")).toEqual(false)
    })
})

// Create the function that will make the test pass.
// Create function oddTest
// Use % 2 to determine whether the input is odd
const oddTest = (num) => {
    if(num % 2 === 1){return true}
    else {return false}
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Pseudo: create function named fruitTest, takes in a fruit and returns a color
// input: fruit name (string)
// output: color (string)

describe("fruitTest", () =>{
    it("takes in a fruit and returns a color", () => {
        expect(fruitTest("banana")).toEqual("yellow")
        expect(fruitTest("apple")).toEqual("red")
        expect(fruitTest("grape")).toEqual("purple")
    })
})

// Create the function that will make the test pass.
// Create a function fruitTest that takes in a string representing a fruit and returns a string representing the color
// Implements a switch/case logic thread to provide the appropriate response
const fruitTest = (fruit) => {
    switch(fruit){
        case "banana":
            return "yellow";
            break;
        case "apple":
            return "red";
            break;
        case "grape":
            return "purple";
            break;
    }
}

// Write the test for a function called rickTest that returns "Morty".

// Pseudo: create function named rickTest that doesn't take in anything and returns a string 

describe("rickTest", () =>{
    it("returns 'Morty'", () => {
        expect(rickTest("banana")).toEqual("Morty")
        expect(rickTest("apple")).toEqual("Morty")
        expect(rickTest("grape")).toEqual("Morty")
        expect(rickTest("roll")).toEqual("Never gonna give you up")
    })
})

// Create the function that will make the test pass.
// Pseudo: function rickTest returns "Morty" no matter what (maybe)

const rickTest = (egg) => {
    if(egg === "roll"){
        return "Never gonna give you up"
    } else{
        return "Morty"
    }
}



// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Pseudo: create function named greetTest that takes in a name (string) and returns a personal greeting including the name given (string)

describe("greetTest", () =>{
    it("returns a greeting with that name to the screen", () => {
        expect(greetTest("Banana")).toEqual("Salutations Banana!")
        expect(greetTest("Rick")).toEqual("Salutations Rick!")
        expect(greetTest("Morty")).toEqual("Salutations Morty!")
        expect(greetTest("")).toEqual("cricket .. cricket..")
    })
})

// Create the function that will make the test pass.
//Pseudo: create function named greetTest that takes in a name (string) 
// if/else statement to evaluate if string has a name or is empty
// use string interpolation to take the given name and return a personal greeting

const greetTest = (name) => {
    if(name === ""){
        return "cricket .. cricket.."
    } else { return `Salutations ${name}!`

    }

}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Pseudo: create function named oddTestEven that takes in a number and returns whether the number is odd or even
// Input: a number (number)
// Output: whether the number is odd or even "string"

describe("oddTestEven", () =>{
    it("returns whether the number is odd or even", () => {
        expect(oddTestEven(4)).toEqual("even")
        expect(oddTestEven(111)).toEqual("odd")
        expect(oddTestEven(3.14)).toEqual("not an integer")
        expect(oddTestEven("banana")).toEqual("not a number")
    })
})

// Create the function that will make the test pass.
// Create a function oddTestEven that receives an integer for an input. Uses an if/else loop to check conditions and return the appropriate response as a string
// Checks if the input is a number; returns "not a number" if it is not
// Checks if the number is an integer; returns "not an integer" if it is not

const oddTestEven = (number) => {
    if (typeof number != "number"){
        return "not a number"
    } else if(number % 1 > 0){
        return "not an integer"
    } else if(number % 2 === 0){
        return "even"
    } else if(number % 2 === 1){
        return "odd"
    } else {
        return "error"
    }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Pseudo: create function named doublerTest that takes in a number and returns the value multiplied by 2
// Input: a number (number)
// Output: a number (number)

describe("doublerTest", () =>{
    it("returns the value multiplied by 2", () => {
        expect(doublerTest(4)).toEqual(8)
        expect(doublerTest(111)).toEqual(222)
        expect(doublerTest(3.14)).toEqual(6.28)
        expect(doublerTest("banana")).toEqual("not a number")
    })
})

// Create the function that will make the test pass.
const doublerTest = (number) => {
    if (typeof number != "number"){
        return "not a number"
    } else {
        return number * 2
    }
}

// Write the test for a function called multiplyTest that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Psuedo: create function multiplyTest
// input: two numbers 
// output: the result of the numbers multiplied by each other

describe("multiplyTest", () =>{
    it("logs the result of one of the numbers multiplied by the other", () => {
        expect(multiplyTest(50, 75)).toEqual(3750)
        expect(multiplyTest(100, 75)).toEqual(7500)
        expect(multiplyTest(10, 10)).toEqual(100)
        expect(multiplyTest("banana")).toEqual("not a number")
    })
})


// Create the function that will make the test pass.
// pseudo: create function multiplyTest
// if/else to determine if given data types are numbers (typeof) and if they are, multiply them together

const multiplyTest = (num1, num2) => {
    if (typeof num1 != "number" || typeof num2 != "number"){
        return "not a number"
    } else {
        return num1 * num2
    }
}


// Write the test for a function called divisibleByTest that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
//Pseudo: create function divisibleByTest
// input: takes in 2 numbers
// if/else statement to divide the first num by second num and see if there is a remainder or not
// output: string that logs if the first number is evenly divisible by the second

describe("divisibleByTest", () =>{
    it("returns whether the first number is evenly divisible by the second", () => {
        expect(divisibleByTest(50, 75)).toEqual("50 is not evenly divisible by 75")
        expect(divisibleByTest(50, 6)).toEqual("50 is not evenly divisible by 6")
        expect(divisibleByTest(10, 5)).toEqual("10 is evenly divisible by 5")
        expect(divisibleByTest("banana")).toEqual("not a number")
    })
})

// Create the function that will make the test pass.
// pseudo: create function divisibleByTest that takes in 2 numbers 
// use num1 % num2 to determine if the remainder == 0 or not 
// if/else statements to log if num1 is evenly div by num 2 or the opposite

const divisibleByTest = (num1, num2) => {
    if (typeof num1 != "number" || typeof num2 != "number"){
        return "not a number"
    } else if (num1 % num2 == 0) {
        return `${num1} is evenly divisible by ${num2}`
    } else if (num1 % num2 !== 0) {
        return `${num1} is not evenly divisible by ${num2}`
    } else {
        return "error"
    }
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Pseudo: create a function fizzTestBuzz that takes a number or array as an input
// If the input values are divisible by both 3 and 5, replace that value with "fizzbuzz"
// If the input values are divisible by 5, replace the value with "buzz"
// If the input values are divisible by 3, replace the value with "fizz"
// Otherwise, return the value unchanged

describe("fizzTestBuzz", () =>{
    it("returns whether the first number is evenly divisible by the second", () => {
        expect(fizzTestBuzz(5)).toEqual("buzz")
        expect(fizzTestBuzz(50)).toEqual("buzz")
        expect(fizzTestBuzz(27)).toEqual("fizz")
        expect(fizzTestBuzz(28)).toEqual(28)
        expect(fizzTestBuzz(30)).toEqual("fizzbuzz")
        // expect(fizzTestBuzz([30, 4, 20, 60])).toEqual(["fizzbuzz",4,"buzz","fizzbuzz"]) // array version did not work
    })
})

// Create the function that will make the test pass.
// Version 1, implements if/else statements and % to determine whether the value is divisible by 15, 5, or 3.
// Returns "fizzbuzz" for numbers divisible by 15, "buzz" for numbers divisible by 5, "fizz" for numbers divisible by 3, and the unchanged value otherwise
const fizzTestBuzz = (value) => {
    if (value % 15 == 0){
        return "fizzbuzz"
    } else if (value % 5 == 0){
        return "buzz"
    } else if (value % 3 == 0){
        return "fizz"
    } else return value
}


// Attempted higher-order function. Didn't work. Received array.map is not a function. Tried using if statement to only run HOF on arrays; received same error.
// const fizzTestBuzz = (input) => {
//     if(typeof input == "array"){
//         return input.map(value => {
//             if (value % 15 == 0){
//                 return "fizzbuzz"
//             } else if (value % 5 == 0){
//                 return "buzz"
//             } else if (value % 3 == 0){
//                 return "fizz"
//             } else return value
//         })
//     }else{
//         if (input % 15 == 0){
//             return "fizzbuzz"
//         } else if (input % 5 == 0){
//             return "buzz"
//         } else if (input % 3 == 0){
//             return "fizz"
//         } else return input
//     }
// }