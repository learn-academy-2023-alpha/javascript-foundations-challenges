// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.


describe("if you are tired", () => {
    it("drink coffee if you are tired and keep working if you are not tired.", () => {
      expect(areYouTired("yes")).toEqual("Drink coffee")
      expect(areYouTired("no")).toEqual("keep working")
    })
  })
// 
  
  
// Create the function that will make the test pass.

const areYouTired = (string) => {
    if (string === "yes") {
      return "Drink coffee"
    } else if (string === "no") {
      return "keep working" 
    }
  }



// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.


describe("if you are stressed", () => {
    it("relax if you are stressed and keep going if you are not stressed", () => {
      expect(areYouStressed("yes")).toEqual("relax")
      expect(areYouStressed("no")).toEqual("keep going")
    })
  })
// 



// Create the function that will make the test pass.
const areYouStressed = (string) => {
    if (string === "yes") {
      return "relax"
    } else if (string === "no") {
      return "keep going" 
    }
  }



// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("in budget", () => {
    it("in budget if a price is lower than $300.", () => {
      expect(inBudget("yes")).toEqual("in budget")
      expect(inBudget("no")).toEqual("out Of Budget")
    })
  })
  

// Create the function that will make the test pass.
const inBudget = (string) => {
    if (string === "yes") {
      return "in budget"
    } else if (string === "no") {
      return "out Of Budget" 
    }
  }


// Write the test for a function that takes in two numbers and returns the smaller number.



describe("theSmaller", () => {
    it("two numbers and returns the smaller number.", () => {
      expect(theSmaller(3,5)).toEqual("is the smaller number")
      expect(theSmaller(5,3)).toEqual("is the larger")
    })
})



const theSmaller = (num1,num2) =>{
    if (num1 < num2){
        return "is the smaller number"
    }else{(num1 > num2)
        return "is the larger"
    }
        
}







// Create the function that will make the test pass.
// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.
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