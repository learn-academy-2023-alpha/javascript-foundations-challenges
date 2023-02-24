// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// describe(" ", () => {
//     it(" ", () => {
//       expect(greeter()).toEqual(" ")
//     })
//   })

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.
const areUTired = (string) => {
    if (string === "yes"){
        return "drink coffee"
    }else if (string === "no"){
        return "keep working"
    }
}

describe("areUTired", () =>{
    it("returns 'drink coffee' if you are tired and 'keep working' if you are not tired", () => {
        expect(areUTired('yes')).toEqual("drink coffee")
        expect(areUTired('no')).toEqual("keep working")
    }
) })

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.


describe("areYouStressed", () =>{
    it ("returns 'relax' if you are stressed and 'keep going' if you are not stressed.", () =>{
        expect(areYouStressed('yes')).toEqual('relax')
        expect(areYouStressed('no')).toEqual('keep going')
    } )
})
// Create the function that will make the test pass.
const areYouStressed = (string) =>{
    if (string === 'yes'){
        return 'relax'
    }else if (string === 'no'){
        return 'keep going'
    }
}


// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("inBudget", () =>{
    it('returns "in budget" if a price is lower than $300.', () =>{
        expect(inBudget(300)).toEqual('in budget')
        expect(inBudget(200)).toEqual('below budget')
        expect(inBudget(500)).toEqual('get a better job')
    })
})
// Create the function that will make the test pass.
const inBudget = (num) =>{
    if (num === 300){
        return 'in budget'
    }else if (num < 300){
        return 'below budget'
    }else if (num > 300){
        return 'get a better job'
    }
}

// Write the test for a function that takes in two numbers and returns the smaller number.
describe('smallNum', () =>{
    it('takes in two numbers and returns the smaller number.', () =>{
        expect(smallNum(10, 5)).toEqual(5)
        expect(smallNum(5, 10)).toEqual(5)
    }) 
})
// Create the function that will make the test pass.
const smallNum = (x, y) =>{
    if (x > y){
        return y
    }else if (x < y){
        return x
    } 
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.

describe("evenOrOdd", () =>{
    it('takes in one numbers and returns whether the number is odd.', () =>{
        expect(evenOrOdd(5)).toEqual('odd')
        expect(evenOrOdd(6)).toEqual('even')
    })
})

// Create the function that will make the test pass.
const evenOrOdd = (num) =>{
    if (num % 2 === 0){
        return 'even'
    }else if (num % 2 !==0){
        return 'odd'
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe('fruitColor', () =>{
    it('takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.', () =>{
        expect(fruitColor('banana')).toEqual('yellow')
        expect(fruitColor('apple')).toEqual('red')
        expect(fruitColor('grape')).toEqual('purple')
    })
})
// Create the function that will make the test pass.
const fruitColor = (string) =>{
    if (string === 'banana'){
        return 'yellow'
    }else if (string === 'apple'){
        return 'red'
    }else if (string === 'grape'){
        return 'purple'
    }
}

// Write the test for a function called rick that returns "Morty".
describe('rick', () => {
    it('function called rick that returns "Morty".', () =>{
        expect(rick()).toEqual('Morty')
    })
})
// Create the function that will make the test pass.
const rick = () =>{
    return 'Morty'
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
describe('greeter', () => {
    it('returns a greeting with that name to the screen.', () => {
        expect(greeter("John")).toEqual('Hello John')
    })
})

// Create the function that will make the test pass.
const greeter = (string) => {
    return `Hello ${string}`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
describe("oddOrEven", () =>{
    it('takes in one numbers and returns whether the number is odd.', () =>{
        expect(oddOrEven(5)).toEqual('odd')
        expect(oddOrEven(6)).toEqual('even')
    })
})


// Create the function that will make the test pass.
const oddOrEven = (num) =>{
    if (num % 2 === 0){
        return 'even'
    }else if (num % 2 !==0){
        return 'odd'
    }
}


// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
describe("doubler", () => {
    it('takes a number and returns the result of the number multiplied by 2.', () => {
        expect (doubler(2)).toEqual(4)
    })
})

// Create the function that will make the test pass.
const doubler = (nums) => {
    return nums * 2
    
}

// // Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
describe("multiply", () => {
    it('takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.', () => {
        expect (multiply(2 , 3)).toEqual(6)
    })
})

// // Create the function that will make the test pass.
const multiply = (num1 , num2) => {
    return num1 * num2
}

// // Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
describe("divisibleBy", ()=> {
    it('takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".', ()=> {
        expect (divisibleBy(10 , 5)).toEqual('10 is evenly divisible by 5')
    })
})

// // Create the function that will make the test pass.
const divisibleBy = (num3 , num4) => {
    if(num3 % num4 ){

    } return `${num3} is evenly divisible by ${num4}`
   
}

// // Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
describe('fizzBuzz', () => {
    it('If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".', () => {
       expect (fizzBuzz(3)).toEqual ('fizz')
       expect (fizzBuzz(5)).toEqual ('buzz')
       expect (fizzBuzz(90)).toEqual ('fizzbuzz')
       expect (fizzBuzz(4)).toEqual (4)
    })
    
})

// // Create the function that will make the test pass.
const fizzBuzz = (num1) => {
    if(num1 % 3 === 0 && num1 % 5 === 0){
        return 'fizzbuzz'
    }else if(num1 % 3 === 0){
        return 'fizz'
    }else if(num1 % 5 === 0){
        return 'buzz'
    }else{
        return num1
    }
}
