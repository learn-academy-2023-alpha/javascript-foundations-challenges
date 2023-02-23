// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.
//psuedocode: create a function called workHarder that takes in a single parameter and returns a string. Input will be either (string) tired or(string) super tired. output should be either "drink coffee"(string) or "keep working"(string)

describe( "workHarder",() => {
    it("returns a statement, drink coffee or keep working",() => { 
        expect(workHarder("tired")).toEqual("keep working")

    } )
    

})
const workHarder = (tiredOrnot) => {
   let protectYaenergy = "tired"
    if ("tired") {
        return ("keep working")
    }
    else if ( "super tired"){
        return "drink coffee"
    }
    else {return "please work harder"}
}




// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.
// Pseudocode:
// Create a function called stressLevels
// input a string of either stressed or not stressed
// output a string of either relax or keep going
// Create a function that will make the test pass

describe("stressLevels", () => {
    it("returns a statement of relax or keep going", () => {
        expect(stressLevels("stressed")).toEqual("relax")
    })
})

const stressLevels = (stressedOrBlessed) => {
let chillPill = "stressed"
    return "relax"
}




// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.
// psuedocode: create a function with an input of a number and returns a string.
// output a string that reads "in budget"
// input a number 
//  function name will be stayBroke
describe("stayBroke", ()=>{
    it (" returns a string of in budget", ()=>{
        expect(stayBroke(10)).toEqual("in budget")
    } )
})
let heGotMoney = 10
const stayBroke = (num) => {
    if (num < 300)
    return "in budget"
}

// Write the test for a function that takes in two numbers and returns the smaller number.
// psuedocode: create a function named smallNum that takes in two numbers and returns the smaller number
// output will be a smaller number from arguments
// inputs will be two numbers
// create a function that will make the test pass.

describe ("smallNum",()=> {
    it (" returns a smaller number", ()=> {
        expect(smallNum(0,2)).toEqual (0) 
    })
})
let mediumNum = 0
let largerNum = 2
const smallNum =(num1,num2)=> {
    if (num1>num2) 
   {

    return num2 }
 else if(num1<num2)
{return num1 }
else {
    return "please enter numerical value"
} }



// Create the function that will make the test pass.
// Write the test for a function that takes in one numbers and returns whether the number is odd.
// psuedocode : create a funtion that takes in one number and returns whether the number is odd or even.
// output : a statement whether a number is odd or even
// input: a singular number 
// create a function named oddOreven
describe("oddOreven", () => {
    it("returns a statement whether number is odd or even ", () => {
      expect(oddOreven(9)).toEqual(" this is odd")
    })
  })
  let newNum = 4
  const oddOreven = (num) => {
    if(num % 2 !== 0)
    {return " this is odd"
  } else if (num % 2 ===0)
  {return "this is even"
}
else {
    return "please enter numerical value"
}
 } 



// Create the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.

//Pseudocode:
// Create a function that takes a fruit (strings) and returns a color (string)
// input - fruit (string), banana, apple, or grape
// output - color (string) - yellow, red, or purple
// Create a function named fruitColor

describe("fruitColor", () => {
    it("returns a color when user inputs in a fruit", () => {
      expect(fruitColor("apple")).toEqual("red")
    })
  })

  let ourFruit = "banana"
  const fruitColor = (fruit) => {
    if(fruit == "banana") {
        return "yellow"
    } else if(fruit == "apple"){
        return "red"
    } else if(fruit == "grape"){
        return "purple"
    } else {
        return "please enter desired fruit"
    }
  }


// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
// Pseudocode: 
// Create a function called rick
// Returns a string "Morty"
// input - none?

describe("rick", () => {
    it("returns a string called 'Morty'", () => {
      expect(rick()).toEqual("Morty")
    })
  })

const rick = () => {
    return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
//Pseudocode:
// Create a function named greeter
// input - a name (string)
// output - a greeting with that name (string); output will be string interpolated

describe("greeter", () => {
    it("returns a greeting with a name", () => {
      expect(greeter("Xavier")).toEqual("Hello, Xavier!")
    })
  })

  let myName = "Xavier"
  const greeter = (name) => {
return `Hello, ${name}!`
  }


// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// Pseudocode
// Create a function called oddOrEven
// input - a number as an argument
// output - will log whether the number is odd or even

describe("oddOrEven", () => {
    it("returns whether the number is odd or even", () => {
      expect(oddOrEven(43)).toEqual("odd")
    })
  })

let myNumber = 49
const oddOrEven = (number1) => {
if(number1 % 2 === 0){
    return "even"
} else if(number1 % 2 !== 0){
    return "odd"
} else {
    return "please enter a numerical value"
}
}


// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.