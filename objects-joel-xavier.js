// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//     getData: function (){
//         return `${this.firstName} ${this.lastName} is from ${this.homePlanet}`
//     }
//   }
// //   Write the code that accesses the first name of the person object.
// // Psudeo code:
// // Output: " Arthur"
// console.log(person.firstName)


// //   Write the code that accesses the last name of the person object.
// // Psudeo code:
// // Output: "Dent"
// console.log(person.lastName);

// //   Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// //Psudeo code:
// // Created a log that code that gives the person object a property of homePlanet and set it to 'Earth'. 
// // homePlanet: "Earth"  

// console.log(person.homePlanet);

// //   Update the person object with a method that logs "Arthur Dent is from planet Earth".
// // Psudeo code:
// // Created a sentence that stated the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(person.getData());
// //Arthur Dent is from Earth

// Consider this variable:

const product = {
  name: "chair",
  price: 24.99,
  describeProduct: function () { 
    return `the product is ${this.name} it cost ${this.price}`
  }
}
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

// Psudeo code:
// create a function named describeProduct. This function takes the product object as an argument.
// The expected output states that the product is a chair that cost $24.99.

// console.log(product.describeProduct());

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// Psudeo Code: 
// Create a function called totalWithTax
// this function takes the product object as an argument.
// Expected outcome the total price of the chair 
// Includes the 7% sales tax rounded to two decimals. 

// const product = {
//     name: "chair",
//     price: 24.99,
//     describeProduct: function () { 
//       return `the product is ${this.name} it cost ${this.price}`
//     }
//   }

//   totalWithTaX(product): function (x) {
//     return this.float (price ).toFixed(2);
//   }

 const totalWithTax = (product) => {
    return product.price * 0.07
    let n = num.toFixed(2);

 }
console.log(totalWithTax(product));