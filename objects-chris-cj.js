// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
//   homePlanet: "Earth",
}
// Write the code that accesses the first name of the person object.
console.log(person.firstName);

// Write the code that accesses the last name of the person object.
console.log(person.lastName);

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth"
console.log(person);

// Update the person object with a method that logs "Arthur Dent is from planet Earth".

person.intro = function() {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}.`
}

console.log(person.intro());

// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

const describeProduct = (object) => {
    return `The product is a ${object.name}. It costs ${object.price}`
}
console.log(describeProduct(product));

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

const totalWithTax = (object) => {
    let salesTax = .07
    return Math.round((1 + salesTax) * object.price * 100) / 100
}

console.log(totalWithTax(product)); // 26.74

// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}

// Write the code that accesses the ingredients property.
console.log(lunch.ingredients) // [ 'bread', 'peanut butter', 'banana' ]

// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2]) // banana

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const recipe = function(object) {
  // return `The ingredients for a ${object.name} ${object.type} are ${object.ingredients.join(", ")}` : The ingredients for a PB and Banana sandwich are bread, peanut butter, banana
  return `The ingredients for a ${object.name} ${object.type} are ${object.ingredients[0]}, ${object.ingredients[1]}, and ${object.ingredients[2]}.` // The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana.
  // let {ingredients[0, 1, 2]} = object.ingredients
  // return `The ingredients for a ${object.name} ${object.type} are ${ingredients[0]}, ${ingredients[1]}, and ${ingredients[2]}.`
}
console.log(recipe(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
lunch.recipe = function() {
  return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.` // The ingredients for a PB and 
}
console.log(lunch.recipe())

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const onlyCats = function(array) {
  return array.filter(value => {
    return value.type === "cat"
  })
}

console.log(onlyCats(animals))
// [
//   { name: 'Fluffy', type: 'cat', age: 14 },
//   { name: 'Hank', type: 'cat', age: 11 }
// ]

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const onlyNames = function(array) {
  return array.map(value => value.name)
}
console.log(onlyNames(animals)) // [ 'Waffles', 'Fluffy', 'Spelunky', 'Hank' ]

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
const onlyOld = function(array) {
  // Create a HOF to filter the animal objects within the array
  return array.filter(value => {
    // Return animal objects with .age > 10
    if (value.age > 10) {return value}
  // Create a HOF to map the .name of each animal to a new array
  }).map(value => value.name)
}
console.log(onlyOld(animals)) // [ 'Fluffy', 'Hank' ]


// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
const onlyAnimals = function(array) {
  return array.map(value => {
    return `${value.name} is a wonderful ${value.type}! They are ${value.age} years old, and excited to meet you!`
  })
}
console.log(onlyAnimals(animals))
// [
//   'Waffles is a wonderful dog! They are 7 years old, and excited to meet you!',
//   'Fluffy is a wonderful cat! They are 14 years old, and excited to meet you!',
//   'Spelunky is a wonderful dog! They are 4 years old, and excited to meet you!',
//   'Hank is a wonderful cat! They are 11 years old, and excited to meet you!'
// ]

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
// // output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf"]