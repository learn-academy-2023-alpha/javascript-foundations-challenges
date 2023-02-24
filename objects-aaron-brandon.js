// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
  homePlanet: "Earth",
  whereFrom: function() {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
  }
}
// Write the code that accesses the first name of the person object.
//PC: use the object.key syntax to access the 'firstName' value
// console.log(person.firstName)

// Write the code that accesses the last name of the person object.
//PC: use the object.key syntax to access the 'lastName' value
// console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// PC: use the assignment operator to add an aditional key:value pair?

// const person = {
//     homePlanet: "Earth"
// }

// console.log(person)
// person was set with const, so it can't be modified, added the homePlanet: "Earth" pair to the original code


// Update the person object with a method that logs "Arthur Dent is from planet Earth".
  //PC: modify the person object with a method that is a function that logs first.name last.name is from home.planet using string interpolation

// console.log(person.whereFrom())

// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
//PC: create a function call describeProduct that uses string interpolation that returns the name of the product and the price.

const describeProduct = () => {
    return `The product is a ${product.name}. It costs $${product.price}.`
}

// console.log(describeProduct())

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// PC: Create a function totalWithTax that takes in the product object. Multiples the price of the chair by .07. using string interpolation return the price of the  product rounded to two decimals.

const totalWithTax = (price) => {
    return (price * 1.07).toFixed(2) 
}
// console.log(totalWithTax(product.price))


// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  listIngredients: function() {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients.slice(0, 2).join(", ")}, and ${this.ingredients[2]}`
  }
}

// Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)

// Write the code that access the third ingredient of the lunch object.
// console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// PC create a function ingredientList that takes the lunch object as an argument. 
//Acess the name and type of the sandwich. 
//Convert the ingredients into a string. Use .join(" ")
//Return the list of ingredients for the sandwich. 

const ingredientList = (object) => {
    return `The ingredients for a ${object.name} ${object.type} are ${object.ingredients.slice(0, 2).join(", ")}, and ${object.ingredients[2]}`
}
// console.log(ingredientList(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// console.log(lunch.listIngredients())


// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// Consider this variable:

// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }
// Write the code that destructures the author object so that the following code snippet will run successfully:
// console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"
// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }

// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"
// Consider this variable:

// const triangleDimensions = {
//   base: 2,
//   height: 5
// }
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// Write the code that will update the base to be the value of 6.
// 🏔 Stretch Goals
// Consider this variable:

// const learn = {
//   cohorts: {
//     2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
//     2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"]
//   }
// }
// Write the code that logs the name of your cohort.
// Write the code that uses destructuring to log the name of your cohort.
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.