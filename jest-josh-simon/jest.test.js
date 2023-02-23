// 💻 Challenges

// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.


//     Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
//         Create the function that will make the test pass.

// input: are you tired? yes/no.
//output: "drink coffee", "keep working"

describe("caffeineCheck", () => {
    it("returns whether you are caffeinated enough", () => {
        expect(caffeineCheck("no")).toEqual("drink coffee")
        expect(caffeineCheck("yes")).toEqual("keep working")
    })
})


const caffeineCheck = (userInput) => {
    if (userInput === "no") {
        return "drink coffee"
    } else if (userInput === "yes") {
            return "keep working"
    }
}
    
//     Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
//         Create the function that will make the test pass.

// input: stressed? yes/no (string)
// output: yes: "relax", no: "keep going" (string)

// pseudocode: create a function stressCheck that will take a user input of "yes" or "no".
//  create an if/else conditional where if the user enters "yes", it will return "relax". else if the user enters "no", it will return "keep going".

describe("stressCheck", () => {
    it("returns if you are stressed or not", () => {
        expect(stressCheck("yes")).toEqual("relax")
        expect(stressCheck("no")).toEqual("keep going")
    })
})

const stressCheck = (userInput) => {
    if (userInput === "yes") {
        return "relax"
    } else if (userInput === "no") {
            return "keep going"
    }
}
    
//     Write the test for a function that returns "in budget" if a price is lower than $300.
//         Create the function that will make the test pass.

// input: a dollar value (number)
// output: either "in budget" or "out of budget" (string)

// psudocode: create a function called budget that takes an input of a numbered dollar value using an if statement conditional
// that will return "in budget" if the input is smaller than $300. there will then be an else/if conditional that will return "out of budget" if it is equal to or greater than $300. we will be using an else statement as an error catch-all that says "your input is no good here, try entering a dollar value."

describe("budget", () => {
    it("returns a statement stating if the entered value is in budget or not", () => {
        expect(budget(295)).toBeLessThan(300)
        expect(budget(333)).toBeGreaterThanOrEqual(300)
        expect(budget())
    })
})


const budget = (input) => {
    if (input > 300) {
        return "in budget"
    } else if (input <= 300) {
        return "out of budget"
    } else {
        return "your input is no good here, try entering a dollar value."
    }
}

//     Write the test for a function that takes in two numbers and returns the smaller number.
//         Create the function that will make the test pass.
//     Write the test for a function that takes in one numbers and returns whether the number is odd.
//         Create the function that will make the test pass.
//     Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
//         Create the function that will make the test pass.
//     Write the test for a function called rick that returns "Morty".
//         Create the function that will make the test pass.
//     Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
//         Create the function that will make the test pass.
//     Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
//         Create the function that will make the test pass.
//     Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
//         Create the function that will make the test pass.
//     Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
//         Create the function that will make the test pass.
//     Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
//         Create the function that will make the test pass.
//     Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
//         Create the function that will make the test pass.
