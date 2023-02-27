
class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Pseudo code : Use Coffee class to create an object. This object will be named black coffee.
// console.log(new Coffee("black coffee")) // ---> Coffee { type: 'black coffee', cream: undefined, sugar: undefined }
// Write the code that outputs the black coffee's profile
// Pseudo code: Use the coffeeProfile function to return black coffee's profile.
// console.log(new Coffee("black").coffeeProfile()) // ---> A black coffee with undefined cream, undefined sugar
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Pseudo code: Use Coffee class to create an object. This object will be 1 for this.cream and 2 for this.sugars
// console.log(new Coffee("black", 1, 2)) // ---> Coffee { type: 'black', cream: 1, sugar: 2 }
// Write the code that outputs the 1 cream and 2 sugars coffee profile
// Pseudo code: Use the coffeeProfile function to return black coffee's profile with 1 cream and 2 sugars.
// console.log(new Coffee("black", 1, 2).coffeeProfile()) // ---> A black coffee with 1 cream, 2 sugars
// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Pseudo code : Create a class named Latte takes a flavor, a milk type, and a number of shots as its values.
class Latte {
    constructor(flavor, milk, shots){
        flavor = this.flavor
        milk = this.milk
        shots = this.shots
    }
    latteProfile(){
        return `A ${this.flavor}, latte with ${this.milk}, ${this.shots}`
    }
}
// Write a method for your Latte class that outputs the latte's profile
// Pseudo code: Use a object to return the latte's profile.
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects