// Write the code that accesses the first name of the person object.
const person = {
    firstName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth",
  }
  
//Psuedo code: Console log the object person and access the value first name of a object.
console.log(person.firstName)
// output: Arthur

// Write the code that accesses the last name of the person object.

// Psuedo code: console log the object person and access the key last name and returning the value "Dent"

console.log(person.lastName)


// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// Psuedo code: Add a key of homePlanet to the object with the value of "Earth"

// const person = {
    // firstName: "Arthur",
    // lastName: "Dent",
    // homePlanet: "Earth",
//   }

    // Update the person object with a method that logs "Arthur Dent is from planet Earth".

    const person1 = {
        firstName: "Arthur",
        lastName: "Dent",
        homePlanet: "Earth",
        nameLocation: function() {
            return `${this.firstName} ${this.lastName} is from the planet ${this.homePlanet}` 

        }
      }
      console.log(person1.nameLocation())
      
      //output: Arthur dent is from planet Earth
      
     
    
 //   Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

 // Psuedo Code: Create a function called describeProduct
    //Input: the product object
    //Output: Logs " The product is a chair. It costs $24.99"
      const product = {
        name: "chair",
        price: 24.99
      }
const describeProduct = (product) => { 
       return `the product is a ${product.name}. It costs $${product.price}.`
        
}
console.log(describeProduct(product))
     


// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// Psuedo Code: Create a function called totalWithTax that takes the product object
    //Input: The objects product 
    //Output: Logs the total price of the chair with a 7% sales tax rounded to two decimals

    const totalWithTax = (object) => {
        return object.price * 1.07 
        
    }
    console.log(totalWithTax(product).toFixed(2))
// Output: 26.74


// Write the code that accesses the ingredients property.

    //Psuedo: console log the object 
    //input: Ingredients key
    //output: Ingredients value

    const lunch = {
        name: "PB and Banana",
        type: "sandwich",
        ingredients: ["bread", "peanut butter", "banana"]
      
    }
      console.log(lunch.ingredients)
 // Output: Ingredients [bread, peanut butter, banana]


// Write the code that access the third ingredient of the lunch object.

//psuedo code: Console log the object to access the key ingredients third value

console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."


// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

