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

// pseudo: 
// create a function named fruitColor
// input: fruit (string)
// output: color (string)

describe("fruitColor", () => {
    it("returns color of fruit", () => {
        expect(fruitColor("banana")).toEqual("yellow")
        expect(fruitColor("apple")).toEqual("red")
        expect(fruitColor("grape")).toEqual("purple")
        expect(fruitColor("peach")).toEqual("that's not a fruit")
    })
})

// Create the function that will make the test pass.

const fruitColor = (fruit) => {
    if(fruit == "banana"){
        return "yellow"
    } else if (fruit == "apple"){
        return "red"
    } else if (fruit == "grape"){
        return "purple"
    } else {
        return "that's not a fruit"
    }
}


// Write the test for a function called rick that returns "Morty".

// pseudo:
// create a function called rick
// output: returns "Morty"

describe("rick", () => {
    it("returns 'Morty'", () => {
        expect(rick()).toEqual("Morty")
    })
})
// Create the function that will make the test pass.

const rick = () => {
    return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

// pseudo: 
// create a function named greeter
// input: name (string)
// output: returns "Hello <input>"

describe("greeter", () => {
    it("returns a greeting with the input name", () => {
        expect(greeter("Ira")).toEqual("Hello Ira")
    })
})

// Create the function that will make the test pass.

const greeter = (inputName) => {
    return `Hello ${inputName}`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

// pseudo:
// create a function called oddOrEven
// input: number
// output: returns if the input number is odd or even

describe("oddOrEven", () => {
    it("returns if a number is odd or even", () => {
        expect(oddOrEven(1)).toEqual("1 is odd")
        expect(oddOrEven(2)).toEqual("2 is even")
    })
})

// Create the function that will make the test pass.

const oddOrEven = (num) => {
    if (num % 2 !== 0) {
        return `${num} is odd`   
    } else if (num % 2 === 0) {
        return `${num} is even`
    }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

// pseudo:
// create a function called doubler
// input: number
// output: input number multiplied by 2

describe("doubler", () => {
    it("returns input multiplied by 2", () => {
        expect(doubler(2)).toEqual(4)
        expect(doubler(1)).toEqual(2)
    })
})

// Create the function that will make the test pass.

const doubler = (inputNumber) => {
    return inputNumber * 2
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

// pseudo: 
// create a function called multilpy
// input: two numbers
// output: result of one number multiplied by ther other number

describe("multiply", () => {
    it("returns result of one number multiplied by the other number", () => {
        expect(multiply(2, 6)).toEqual(12)
        expect(multiply(1, 8)).toEqual(8)
    })
})

// Create the function that will make the test pass.

const multiply = (num1, num2) => {
    return num1 * num2
}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// pseudo: create a function called divisibleBy 
// input: two numbers as an argument
// output: returns whether the first number is evenly divisible by the second

describe("divisibleBy", () => {
    it("returns whether the first number is evenly divisible by the second", () => {
        expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
        expect(divisibleBy(10, 3)).toEqual("10 is not evenly divisible by 3")
    })
})

// Create the function that will make the test pass.

const divisibleBy = (num1, num2) => {
    if(num1 / num2 % 2 === 0){
        return `${num1} is evenly divisible by ${num2}`
    } else if (num1 / num2 % 2 !== 0){
        return `${num1} is not evenly divisible by ${num2}`
    } else {
        return "try using two numbers"
    }
}


// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

// pseudo:
// create a function called fizzbuzz
// input: number
// output: If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

describe("fizzBuzz", () => {
    it("returns 'fizz' if number is a multiple 3, 'buzz' if of 5, and 'fizzbuzz' if of 3 and 5", () => {
        expect(fizzBuzz(15)).toEqual("fizzbuzz")
        expect(fizzBuzz(9)).toEqual("fizz")
        expect(fizzBuzz(5)).toEqual("buzz")
    })
})

// Create the function that will make the test pass.

const fizzBuzz = (num) => {
    if(num % 3 === 0 && num % 5 === 0){
        return "fizzbuzz"
    } else if (num % 5 === 0){
        return "buzz"
    } else if (num % 3 === 0){
        return "fizz"
    } else {
        return "try using a number"
    }
}