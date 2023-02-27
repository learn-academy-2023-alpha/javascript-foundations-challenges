// Coffee marker: copy the given Coffee class into a text editor

class Coffee { // McDonalds-style coffee order
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase() // String describing type of coffee
    this.cream = cream // Number of creams
    this.sugar = sugar // Number of sugars
  }
  coffeeProfile() { // Returns an interpolated string describing the coffee object
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
  
    creams() { // Pluralizes cream
      if (this.cream > 1) {
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars() { // Pluralizes sugars
      if (this.sugar > 1) {
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }
  }

// Write the code that makes a black coffee object
let blackCoffee = new Coffee("black", 0, 0)

// Write the code that outputs the black coffee's profile
console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee object with 1 cream and 2 sugars
let basicCoffee = new Coffee("Basic", 1, 2)

// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(basicCoffee.coffeeProfile())

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte

class Latte { // Starbucks-style latte order
      constructor(flavor = "plain", milkType = "whole milk", shot = 1) {
        this.flavor = flavor.toLowerCase() // String describing type of flavor
        this.milkType = milkType.toLowerCase() // String describing type of milk
        this.shot = shot // Number of shots
      }
      latteProfile() { // Returns an interpolated string describing the latte object
          return `A ${this.flavor} latte with ${this.milkType} foam and ${this.shots()}`
        }
      
        shots() { // Pluralizes shot
          if (this.shot > 1) {
            return `${this.shot} shots`
          } else {
            return `${this.shot} shot`
          }
        }
      }

// Log the regular, single shot latte's profile

let regularLatte = new Latte("plain", "whole milk", 1)
console.log(regularLatte.latteProfile())

// Write the code that makes a double shot, hazelnut latte with almond milk.
let basicLatte = new Latte("hazelnut", "almond milk", 2)

// Log the double shot, hazelnut latte with almond milk's profile.
console.log(basicLatte.latteProfile())

// Test functionality of default values
let testLatte = new Latte()
console.log(testLatte.latteProfile())

// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
