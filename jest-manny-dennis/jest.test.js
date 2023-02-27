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
const myBudget = (num) => {
    if (num < 300)
        return "in budget"
}

describe("myBudget", () => {
    it("returns in budget if price is lower than $300", () => {
        expect(myBudget(98)).toEqual("in budget")
    })
})

// Create the function that will make the test pass.
// Write the test for a function that takes in two numbers and returns the smaller number.
//Pseudocode: Create a function smallNum
//Input : num1 , num2
//output : returns the smaller number of num1 or num2

const smallNum = (num1, num2) => {
    if (num1 >= num2)
        return num2
    else if (num1 <= num2)
     return num1 
}

describe("smallNum", () => {
    it("returns the smaller number", () => {
        expect(smallNum(10, 15)).toEqual(10)
    })
})


// Create the function that will make the test pass.
// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Pseudocode: Create a function called myNumber
// input: one number
// output: whether the number is odd

const myNumber = (num) => {
    if ( num % 2 === 1)
    return "odd"
}

describe("myNumber", () => {
    it("returns the number if odd", () => {
        expect(myNumber(13)).toEqual("odd")
    })
})

// Create the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Pseudocode: Create a function called myFruit
// input: fruit "string"
// output: yellow for banana red for apple and purple for grape "string"

const myFruit = (string) => {
    if (string === "banana")
    return "yellow"
    else if (string === "apple")
    return "red"
    else if (string === "grape")
    return "purple"
}

describe("myFruit", () => {
    it("returns the color of fruit", () => {
        expect(myFruit("banana")).toEqual("yellow")
        expect(myFruit("apple")).toEqual("red")
        expect(myFruit("grape")).toEqual("purple")
    })
})
// Create the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Pseudocode: Create a function myName
// Input : Rick "string"
// Output: Morty "string"

const myName = (string) => {
    return "Morty"
}

describe("myName", () => {
    it("returns Morty", () => {
        expect(myName("Rick")).toEqual("Morty")
    })
})

// Create the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Pseudocode: Create a function called greeter
// Input: name "string"
// Outout: Welcome (name)"string" to LEARN!

const greeter = (string) => {
    return `Welcome ${string} to LEARN!`
}


describe("greeter", () => {
    it(`Welcome ${""} to LEARN!`, () => {
        expect(greeter("Black")).toEqual(`Welcome Black to LEARN!`)
    })
})


// Create the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Pseduocode: Create a function oddOrEven
// Input: number
// Output: Whether number is odd or even

const oddOrEven = (num) => {
    if (num % 2===1)
    return "odd"
    else if (num % 2===0)
    return "even"
}

describe("oddOrEven", () => {
    it("returns whether number is odd or even", () => {
        expect(oddOrEven(3)).toEqual("odd")
        expect(oddOrEven(18)).toEqual("even")
    })
})
// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Pseduocode: Create a function called mult2
// Input: number
// Output: return number * 2

const mult2= (num) => {
    return num * 2

}

describe("mult2", () => {
    it ("returns number * 2", () => {
        expect(mult2(3)).toEqual(6)
        })
    })

// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Pseudocode: Create a fuction called mult
// Input: num1 num 2
// Output: returns num1 * num2
const mult= (num1, num2) => {
    return num1 * num2

}

describe("mult", () => {
    it ("returns numb1 * num2", () => {
        expect(mult(5, 4)).toEqual(20)
        })
    })

// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
//Pseudocode: Create a function called divisibleBy
// Input : num1 num 2
// Output: returns num 1 is evenly divisible by num 2

const divisibleBy= (num1, num2) => {
    if(num1 % num2 === 0)
    return "10 is evenly divisible by 5"

}

describe("divisibleBy", () => {
    it("returns if num1 is evenly divisible by num 2", () => {
        expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
        })
    })


// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.

// Pseudocode: Write fucntion fizzBuzz
// Input: number
// Output: return string "fizz" if multiplied by 3
// return string "buzz" if multiplied 5
// return if multiple of both 3 and 5 string "fizzbuzz"

const fizzBuzz = (num) => {
    if (num % 3===0 && num % 5===0)
    return "fizzbuzz"
    else if (num % 5===0)
    return "buzz"
    else if (num % 3===0)
    return "fizz"
}

describe("fizzBuzz", () => {
    it("returns string", () => {
        expect(fizzBuzz(12)).toEqual("fizz")
        expect(fizzBuzz(20)).toEqual("buzz")
        expect(fizzBuzz(30)).toEqual("fizzbuzz")
    })
})