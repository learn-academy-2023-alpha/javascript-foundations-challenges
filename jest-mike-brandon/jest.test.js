// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

//create function areYouTired, pass in string
//input: string of yes or no to determine each condition
//ouput: returns "drink coffee" or "keep working" depending on input

describe("areYouTired", () => {
    it("returns 'drink coffee' or 'keep working' depending on input", () => {
      expect(areYouTired("yes")).toEqual("drink coffee")
      expect(areYouTired("no")).toEqual("keep working")
    })
})

const areYouTired = (string) => {
    if(string === "yes"){
        return "drink coffee"
    } else if(string === "no"){
        return "keep working"
    } else {
        return "Error: input is not a string"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.

//create function areYouStressed
//input: string of yes or no to determine each condition 
//ouput: returns "relax" or "keep going" depending on input

describe("areYouStressed", () => {
    it("returns 'relax' or 'keep going' depending on input", () => {
      expect(areYouStressed("yes")).toEqual("relax")
      expect(areYouStressed("no")).toEqual("keep going")
    })
})

const areYouStressed = (string) => {
    if(string === "yes"){
        return "relax"
    } else if(string === "no"){
        return "keep going"
    } else {
        return "Error: input is not a string"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.

//create function inBudget
//input: number to determine each condition 
//ouput: returns "in budget" or "over budget" or "same as budget" depending on input

describe("inBudget", () => {
    it("returns 'in budget' or 'over budget' or 'same as budget' depending on input", () => {
      expect(inBudget(299)).toEqual("in budget")
      expect(inBudget(350)).toEqual("over budget")
      expect(inBudget(300)).toEqual("same as budget")
    })
})

const inBudget = (number) => {
    if(number < 300){
        return "in budget"
    } else if(number > 300){
        return "over budget"
    } else if(number ===  300){
            return "same as budget"
    } else {
        return "Error: input is not a number"
    }
}

// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

//create function compareNumber
//input: 2 numbers to compare which is smaller
//ouput: returns the number that is smaller based on comparison

describe("compareNumber", () => {
    it("returns the number that is smaller based on comparison", () => {
      expect(compareNumber(12, 37)).toEqual(12)
      expect(compareNumber(45, 22)).toEqual(22)
      expect(compareNumber(45, 45)).toEqual("numbers are the same")
    })
})

const compareNumber = (num1, num2) => {
    if(num1 < num2){
        return num1
    } else if(num1 > num2){
        return num2
    } else if(num1 === num2){
        return "numbers are the same"
    } else {
        return "Error: both or one input is not a number"
    }
}

// Write the test for a function that takes in one number and returns whether the number is odd.
// Create the function that will make the test pass.

//create function oddNumber
//input: number to check if its odd
//ouput: returns the number if its odd or even

describe("oddNumber", () => {
    it("returns the number if its odd or even", () => {
      expect(oddNumber(13)).toEqual(13)
      expect(oddNumber(24)).toEqual(24)
    })
})

const oddNumber = (number) => {
    if(number % 2 != 0){
        return number
    } else if(number % 2 === 0){
        return number
    } else {
        return "Error: input is not a number"
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple 
// and "purple" if grape.
// Create the function that will make the test pass.

//create function colorfulFruit
//input: string of the fruit to determine the condition
//ouput: returns a string of the color based on the input

describe("colorfulFruit", () => {
    it("returns a string of the color based on the input", () => {
      expect(colorfulFruit("banana")).toEqual("yellow")
      expect(colorfulFruit("apple")).toEqual("red")
      expect(colorfulFruit("grape")).toEqual("purple")
      expect(colorfulFruit("")).toEqual("Not a choice!")
    })
})

const colorfulFruit = (string) => {
    if(string === "banana"){
        return "yellow"
    } else if(string === "apple"){
        return "red"
    } else if(string === "grape"){
        return "purple"
    } else {
        return "Not a choice!"
    }
}

// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.

//create function rick
//input: nothing
//ouput: returns the string "Morty"

describe("rick", () => {
    it("returns the string 'Morty'", () => {
      expect(rick()).toEqual("Morty")
    })
})

const rick = () => {
    return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name 
// to the screen.
// Create the function that will make the test pass.

//create function greeter
//input: string of a name
//ouput: returns a greeting with the name

describe("greeter", () => {
    it("returns a greeting with the name", () => {
      expect(greeter("Brandon")).toEqual("Hello, Brandon!")
    })
})

const greeter = (string) => {
    return `Hello, ${string}!`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd 
//or even.
// Create the function that will make the test pass.

//create function oddOrEven
//input: number to check if its odd or even
//ouput: returns a string whether the number is odd or even

describe("oddOrEven", () => {
    it("returns a string whether the number is odd or even", () => {
      expect(oddOrEven(17)).toEqual("Odd")
      expect(oddOrEven(14)).toEqual("Even")
   
    })
})

const oddOrEven = (number) => {
    if(number % 2 !=  0){
        return "Odd"
    } else if(number % 2 === 0){
        return "Even"
    } else {
        return "Not a number"
    }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.

//create function doubler
//input: 
//ouput: returns 

describe("oddOrEven", () => {
    it("returns a string whether the number is odd or even", () => {
      expect(oddOrEven(17)).toEqual("Odd")
      expect(oddOrEven(14)).toEqual("Even")
   
    })
})



// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers 
// multiplied by the other.
// Create the function that will make the test pass.

//create function multiply
//input:
//ouput: returns 

describe("oddOrEven", () => {
    it("returns a string whether the number is odd or even", () => {
      expect(oddOrEven(17)).toEqual("Odd")
      expect(oddOrEven(14)).toEqual("Even")
   
    })
})

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is 
// evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.

//create function divisibleBy
//input: 
//ouput: returns 

describe("oddOrEven", () => {
    it("returns a string whether the number is odd or even", () => {
      expect(oddOrEven(17)).toEqual("Odd")
      expect(oddOrEven(14)).toEqual("Even")
   
    })
})

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is 
// a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.

//create function fizzbuzz
//input: 
//ouput: 

describe("oddOrEven", () => {
    it("returns a string whether the number is odd or even", () => {
      expect(oddOrEven(17)).toEqual("Odd")
      expect(oddOrEven(14)).toEqual("Even")
   
    })
})
