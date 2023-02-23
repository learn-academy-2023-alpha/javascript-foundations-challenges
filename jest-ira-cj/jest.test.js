// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// Psuedo: Create a function named drinkCoffee 
// input: conditional statement for Yes or no string
//output: drink coffee if tired, or keep working if not tired

const drinkCoffee = (response) => {
    if (response == "yes") {
        return "Drink Coffee"
    }else if(response == "no"){
        return "Keep Working"
    }else {
        return "Try Again"
    }
}

describe("drinkCoffee", () => {
    it("returns drink coffee or keep working", () => {
        expect(drinkCoffee("yes")).toEqual("Drink Coffee")
        expect(drinkCoffee("no")).toEqual("Keep Working")
    })
}) 
// Passed
// Create the function that will make the test pass.


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// Psuedo: Create a function named stressTest
//input: Yes or No
//output: Relax or Keep going based on input

describe("stressTest", () => {
   it("returns relax or keep going", () => {
    expect(stressTest("yes")).toEqual("Relax")
    expect(stressTest("no")).toEqual("Keep Working")
   })
})

// Create the function that will make the test pass.
const stressTest = (response) => {
    if (response == "yes") {
    return "Relax"
    
}   else if (response == "no") {
    return "Keep Working"

}   else {
    return "try again"
} 
}


// Write the test for a function that returns "in budget" if a price is lower than $300.

//Psuedo: Create a function named inBudget
// input: price (number)
// output: a string that says in budget if the umber is below 300

describe("inBudget", () => {
    it("returns in budget", () => {
        expect(inBudget(299)).toEqual("in budget")
    })

})
// Create the function that will make the test pass.
const inBudget = (price) => {
    if (price < 300) {
        return "in budget"
    }
}


// Write the test for a function that takes in two numbers and returns the smaller number.

// Psuedo: create a function named numCompare
// input: is Two numbers
// output: the smaller number

describe("numCompare", () => {
    it("returns the smaller number", () => {
        expect(numCompare(2, 3)).toEqual(2)
    })
})

// Create the function that will make the test pass.
const numCompare = (num1, num2) => {
    if (num1 > num2) {
        return num2  
    }else if (num1 < num2) {
        return num1
    }
}

// Write the test for a function that takes in one number and returns whether the number is odd.

//Psuedo: create a function named oddReturn
//input: is a number
//output: if a number input is odd

describe("oddReturn", () => {
    it("returns if a number is odd", () =>{
        expect(oddReturn(1)).toEqual("1 is odd")
    })
})
// Create the function that will make the test pass.
const oddReturn = (num) => {
    if (num % 2 !== 0) {
        return `${num} is odd`
        
    }
}

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