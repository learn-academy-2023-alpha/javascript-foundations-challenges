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
        expect(budget(295)).toEqual("in budget")
        expect(budget(333)).toEqual("out of budget")
        expect(budget(300)).toEqual("out of budget")
        expect(budget("purple")).toEqual("your input is no good here, try entering a dollar value.")
    })
})


const budget = (inputNum) => {
    if (inputNum < 300) {
        return "in budget"
    } else if (inputNum >= 300) {
        return "out of budget"
    } else {
        return "your input is no good here, try entering a dollar value."
    }
}

//     Write the test for a function that takes in two numbers and returns the smaller number.
//         Create the function that will make the test pass.
// input: two numbers
// output: the smaller of the 2 inputs

// psuedo: create a function called compareNumbers that will take the input of 2 seperate numbers
//  Use a conditional statement to compare the two numbers and return the smaller of the two numbers.

// describe("compareNumbers", () => {
    
//     it("compare 2 numbers and return the smaller of the two numbers", () => {
//         expect(compareNumbers(100, 2)).toEqual(2)
//         expect(compareNumbers(100, 200)).toEqual(100)
//     })
// })

describe("compareNumbers", () => {
    
    it("compare 2 numbers and return the smaller of the two numbers", () => {
        let num1 = 100
        let num2 = 200
        expect(compareNumbers(num1, num2)).toEqual(num1)
    })
})

const compareNumbers = (num1, num2) => {return ((num1 < num2) ? num1 : num2);}

// console.log(compareNumbers(100, 2));

//     Write the test for a function that takes in one numbers and returns whether the number is odd.
//         Create the function that will make the test pass.

// input: input a single number (number)
// output: a string stating if the input number is odd

// psuedo: create a ternary function called oddChecker that takes the input of a single number and returns a string saying "this number is odd" if the number is odd or "this number is not odd" if the input number is even. 

describe("oddChecker", () => {
    it("check if a number is odd", () => {
        let num = 3
        let num2 = 4000
        expect(oddChecker(num)).toEqual(`${num} is odd`)
        expect(oddChecker(num2)).toEqual(`${num2} is not odd`)
    })
})

const oddChecker = (num) => {return ((num % 2 === 0) ? `${num} is not odd` : `${num} is odd`)}


//     Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
//         Create the function that will make the test pass.

// input: "banana", "apple", "grape" (string)
// output: "banana" = "yellow", "apple" = "red", "grape" = 'purple' (string)

// psuedo: create a function called fruitBasket that takes in either "banana", "apple", "grape" as an input. Using a conditonal statement. if banana return yellow. else if apple return red else if grape return purple

describe("fruitBasket", () => {
    it("check the color of the input fruit", () => {
        expect(fruitBasket("banana")).toEqual("yellow")
        expect(fruitBasket("apple")).toEqual("red")
        expect(fruitBasket("grape")).toEqual("purple")
    })
})

const fruitBasket = (string) => {
    if(string === "banana") {
        return "yellow"
    } else if (string === "apple") {
        return "red"
    } else if (string === "grape") {
        return "purple"
    }
}

//     Write the test for a function called rick that returns "Morty".
//         Create the function that will make the test pass.

// input: none
// output: "Morty" (string)

describe("rick", () => {
    it("say Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})

const rick = () => {
    return "Morty"
}

//     Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
//         Create the function that will make the test pass.

// input: a name (string)
// output: the name  in a gretting

// pseudo: create a function called helloThere and take the string input of a name. Return the string interpolation of "Hello there ${name}!!!"

describe("helloThere", () => {
    let name = "Ewan"
    it("dynamically add a name to a greeting", () => {
        expect(helloThere(name)).toEqual(`Hello there ${name}!!!`)
    })
})

const helloThere = (name) => {
    return `Hello there ${name}!!!`
}


//     Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
//         Create the function that will make the test pass.

// input: input a single number (number)
// output: a string stating if the input number is even or odd

// psuedo: create a ternary function called oddOrEven that takes the input of a single number and returns a string saying "this number is odd" if the number is odd or "this number is even" if the input number is even. 

describe("oddOrEven", () => {
    it("check if a number is odd or even", () => {
        let num = 3
        let num2 = 4000
        expect(oddOrEven(num)).toEqual("this number is odd")
        expect(oddOrEven(num2)).toEqual("this number is even")
    })
})

const oddOrEven = (num) => {return ((num % 2 === 0) ? "this number is even" : "this number is odd")}


//     Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
//         Create the function that will make the test pass.

// input: a number (number)
// output: input doubled (number)

// pseudo: create a function called theDoubler that takes the input of a single number. Then return the input number * 2.

describe("theDoubler", () => {
    it(" multiply input number by 2", () => {
        let num = 10
        expect(theDoubler(num)).toEqual(num * 2) 
        expect(theDoubler(100)).toEqual(200)
    })
})

const theDoubler = (num) => {
    return num * 2  
}
console.log(theDoubler(4));

//     Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
//         Create the function that will make the test pass.

// input: 2 number (number)
// output: 1 number multiplied by the other (number)

// pseudo: create a function called theMultiplier that takes two numbers input as arguments. It will return 1 number multiplied by the other

describe("theMultiplier", () => {
    it("multiply 2 input numbers by each other", () => {
        let num1 = 4
        let num2 = 87
        expect(theMultiplier(num1, num2)).toEqual(num1 * num2)
    })
})

const theMultiplier = (num1, num2) => {
    return num1 * num2
} 
//     Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
//         Create the function that will make the test pass.

// input: 


//     Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
//         Create the function that will make the test pass.
