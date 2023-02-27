// // 💻 Challenges

// // Consider this variable:

// // const person = {
// //   firstName: "Arthur",
// //   lastName: "Dent",
// // }

// //     Write the code that accesses the first name of the person object.

// // console.log(person.firstName)

// //     Write the code that accesses the last name of the person object.
// // console.log(person.lastName)

// //     Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// // const person = {
// //     firstName: "Arthur",
// //     lastName: "Dent",
// //     homePlanet: "Earth"
// //   }

// //     Update the person object with a method that logs "Arthur Dent is from planet Earth".

// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//     nameLog: function() {
//         return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}.`
//     }
//   }
// console.log(person.nameLog())
// // Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99
// }

// //     Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// const describeProduct = () => {
//     return `The product is a ${product.name}. It costs ${product.price}.`
// }
// console.log(describeProduct())

// //     Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// const totalWithTax = () => {
//     let taxNum = product.price * .7
//     return taxNum.toFixed(2)
// }
// console.log(totalWithTax())

// // Consider this variable:

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"],
//   lunchRecipe: function() {
//     return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}.`
//   }
// }

// //     Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)
// //     Write the code that access the third ingredient of the lunch object.
// // console.log(lunch.ingredients.filter((value)=> {value.indexOf[2]}))

// console.log(lunch.ingredients[2])

// const {name, type, ingredients} = lunch
// console.log(ingredients[2])
// //     Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// const weirdSandwich = () => {
//     return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
// }
// console.log(weirdSandwich(lunch))
// //     Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// console.log(lunch.lunchRecipe())
// // Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]

// //     Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// const justCats = (animal) => {
//     let catArray = []
//     return catArray = animal.filter((value) => value.type === "cat")
// }
// console.log(justCats(animals))
// //     Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// const animalNames = (animal) => {
//     let animalArray = []
//     return animalArray = animal.map((value) => value.name)
// }
// console.log(animalNames(animals))
// //     Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

// // const animalAge = (animal) => {
// //     let tempArray = []
// //     for (let i = 0; i < animal.length; i++) {
// //         if (animal[i].age > 10) {
// //             return tempArray.push(animal.name)
// //         } else { 
// //             return "oops."
// //          }
// //     }
// //     return tempArray
// // }
// // console.log(animalAge(animals))


const animalAge = (animal) => {
    //let oldAnimals = []
    return animal.filter((value) => {
        if (value.age > 10) {
            return value.name
        } 
    }).map({name}) = name
}
console.log(animalAge(animals))
// // [expected output: "Fluffy", "Hank"]

// //     Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

// const animalSentence = (animal) => {
//     let sentenceArray = []
//     return sentenceArray = animal.map((value, index) => {
//         if(index === 0){
//             return `${value.name} is a ${value.type} and ${value.age} years old.`
//         } else if(index === 1){
//             return `${value.name} is a ${value.type} and ${value.age} years old.`
//         } else if(index === 2){
//             return `${value.name} is a ${value.type} and ${value.age} years old.`
//         } else if(index === 3){
//             return `${value.name} is a ${value.type} and ${value.age} years old.`
//         } else {
//             return "Index doesnt exist"
//         }
//     })
// }
// console.log(animalSentence(animals))

// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}

//     Write the code that destructures the author object so that the following code snippet will run successfully:

const {name, genre} = author

console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"

// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}

//     Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

const describePokemon = (poke) => {
    const {species, pokemon_type} = poke
    return `${species} is a ${pokemon_type} pokemon.`
}

console.log(describePokemon(pokeOne))
// output: "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
// output: "Magikarp is a Water pokemon"

// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5,
  triangleArea: function() {
    return this.base * this.height
  }
}

//     Modify the triangleDimensions object to have a method that returns the area of the triangle.

console.log(triangleDimensions.triangleArea())

//     Write the code that will update the base to be the value of 6.

let {base, height} = triangleDimensions
 base = 6
 console.log(base)

// 🏔 Stretch Goals

// Consider this variable:

const learn = {
  cohorts: {
    2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"]
  }
}

//     Write the code that logs the name of your cohort.
//     Write the code that uses destructuring to log the name of your cohort.
//     Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.

// // output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf"]

