// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("areYouTired", () => {

    it("returns drink coffee if tired or keep working", () => {

        expect(areYouTired("yes")).toEqual("drink coffee") 
        expect(areYouTired("no")).toEqual("keep working") 
    })
})

// Create the function that will make the test pass.

const areYouTired = (string) => {
    if(string === "yes") {

        return "drink coffee"
    }else if(string === "no") {
        return "keep working"
    } else return "something went wrong"
} 

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("areYouStressed", () => {

    it("returns relax if you are stressed esle keep going", () => {

        expect(areYouStressed("yes")).toEqual("relax") 
        expect(areYouStressed("no")).toEqual("keep going") 
    })
})

// Create the function that will make the test pass.

const areYouStressed = (string) => {
    if(string === "yes") {

        return "relax"
    }else if(string === "no") {
        return "keep going"
    } else return "something went wrong"
} 

// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("budget", () => {

    it("return if a price is lower than $300 too expensive", () => {
        expect(budget(299)).toEqual("in budget")
        expect(budget(350)).toEqual("too expensive")
    })
})


// Create the function that will make the test pass.

const budget = (number) => {
    if(number > 300 ) {
        return "too expensive"
    }else if(number < 300 ){
        return "in budget"
    }else return "something went wrong"
}

// Write the test for a function that takes in two numbers and returns the smaller number.

describe("smallerNumber", () => {

    it("returns the smaller of two numbers", () => {
        expect(smallerNumber(10, 20)).toEqual(`${10} is the smaller number`)
    })
})

// Create the function that will make the test pass.

const smallerNumber = (num1, num2) => {

    if(num1 > num2) {
        return `${num2} is the smaller number`
    }else if (num2 > num1) {
        return `${num1} is the smaller number`
    }else return "something went wrong"
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.

describe("isOdd", () => {

    it("returns number if odd", () => {
        expect(isOdd(4)).toEqual("this number is even") 
        expect(isOdd(3)).toEqual(`${3} is odd`)
    })
})

// Create the function that will make the test pass.

const isOdd = (num) => {

    if(num % 2 === 0)
    return this num
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