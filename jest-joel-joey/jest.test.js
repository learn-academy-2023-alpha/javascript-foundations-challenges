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

    if(num % 2 === 0){
        return "this number is even"
    }else if (num % 2 !== 0){
        return `${num} is odd`
    }else return "something is wrong"
    
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruits", () => {

    it("returns a color that matches the fruit", () => {
        expect(fruits("banana")).toEqual("yellow")
        expect(fruits("apple")).toEqual("red")
        expect(fruits("grape")).toEqual("purple")
    })
})


// Create the function that will make the test pass.
const fruits = (string) => {
    if(string === "banana") {
        return "yellow"
    }else if (string === "apple"){
        return "red"
    }else if (string === "grape"){
        return "purple"
    }else return "something is wrong"

}


// Write the test for a function called rick that returns "Morty".

describe("rick", () => {
    it("returns Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})

// Create the function that will make the test pass.

const rick = () => {

    return "Morty"
}
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe("greeter", () => {

    it("returns name and greeting", () => {

        expect(greeter("joel")).toEqual(`${"joel"} welcome, its a pleasure to meet you`)
    })
})

// Create the function that will make the test pass.

const greeter = (input) => {
    return `${input} welcome, its a pleasure to meet you`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe("isOddOrEven", () => {

    it("returns odd or even based off number input", () => {
        expect(isOddOrEven(4)).toEqual(`${4} is even`) 
        expect(isOddOrEven(3)).toEqual(`${3} is odd`)
    })
})

// Create the function that will make the test pass.

const isOddOrEven = (num) => {

    if(num % 2 === 0){
        return `${num} is even`
    }else if (num % 2 !== 0){
        return `${num} is odd`
    }else return "something is wrong"
    
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

describe("doubler", () => {

    it("returns number multiplied by 2", () => {
        expect(doubler(5)).toEqual(10)
    })
})


// Create the function that will make the test pass.

const doubler = (num) => {

    return num * 2
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

describe("multiply", () => {

    it("returns number multiplied by the other", () => {
        expect(multiply(7, 5)).toEqual(35)
    })
})

// Create the function that will make the test pass.

const multiply = (num1, num2) => {

    return num1 * num2 
}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

describe("divisibleBy", () => {

    it("returns if one number is divisible by the other number", () => {

        expect(divisibleBy(10, 5)).toEqual(`${10} is evenly divisible by ${5}`)
    })
})

// Create the function that will make the test pass.

const divisibleBy = (num1, num2) => {

    if(num1 % num2 === 0) {
        return `${num1} is evenly divisible by ${num2}`
    }else return "something went wrong"
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

describe("fizzbuzz", () => {
    it("if 3 = fizz, if 5 = buzz, if 3 and 5 = fizzbuzz", () => {
        expect(fizzbuzz(6)).toEqual("fizz")
        expect(fizzbuzz(10)).toEqual("buzz")
        expect(fizzbuzz(15)).toEqual("fizzbuzz")
    })
})


// Create the function that will make the test pass.

const fizzbuzz = (num) => {
    if(num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz"
    } else if (num % 3 === 0) {
        return "fizz"
    }else if (num % 5 === 0) {
        return "buzz"
    }else return "your number is wack"
}
// $ /Users/learnacademy/Desktop/javascript-foundations-challenges/jest-joel-joey/node_modules/.bin/jest
//  PASS  ./jest.test.js
//   areYouTired
//     ✓ returns drink coffee if tired or keep working (5 ms)
//   areYouStressed
//     ✓ returns relax if you are stressed esle keep going
//   budget
//     ✓ return if a price is lower than $300 too expensive (1 ms)
//   smallerNumber
//     ✓ returns the smaller of two numbers (1 ms)
//   isOdd
//     ✓ returns number if odd (1 ms)
//   fruits
//     ✓ returns a color that matches the fruit (1 ms)
//   rick
//     ✓ returns Morty (1 ms)
//   greeter
//     ✓ returns name and greeting (2 ms)
//   isOddOrEven
//     ✓ returns odd or even based off number input (2 ms)
//   doubler
//     ✓ returns number multiplied by 2 (1 ms)
//   multiply
//     ✓ returns number multiplied by the other
//   divisibleBy
//     ✓ returns if one number is divisible by the other number (1 ms)
//   fizzbuzz
//     ✓ if 3 = fizz, if 5 = buzz, if 3 and 5 = fizzbuzz (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       13 passed, 13 total
// Snapshots:   0 total
// Time:        0.777 s, estimated 1 s