

// Coffee maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile


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

const blackCoffee = new Coffee("black", 0, 0)
console.log(blackCoffee) // Coffee { type: 'black', cream: 0, sugar: 0 }
console.log(blackCoffee.coffeeProfile()) // A black coffee with 0 cream, 0 sugar

const myCoffee = new Coffee("sweetened", 1, 2)
console.log(myCoffee) // Coffee { type: 'sweetened', cream: 1, sugar: 2 }
console.log(myCoffee.coffeeProfile()) // A sweetened coffee with 1 cream, 2 sugars

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile

class Latte {
    constructor(flavor, milkType, shot) {
      this.flavor = flavor.toLowerCase()
      this.milkType = milkType.toLowerCase()
      this.shot = shot
    }
    latteProfile() {
        return `A ${this.flavor} latte with ${this.milkType} and ${this.shots()}`
      }
    shots() {
        if (this.shot > 1) {
          return `${this.shot} shots`
        } else {
          return `${this.shot} shot`
        }
      }
}

// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
const regLatte = new Latte("regular", "whole milk", 1)
console.log(regLatte.latteProfile()) // A regular latte with whole milk and 1 shot


// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.
const hazelnutLatte = new Latte("hazelnut", "almond milk", 2)
console.log(hazelnutLatte.latteProfile()) // A hazelnut latte with almond milk and 2 shots



// Volume of a Cylinder: create a class for Cylinder
class Cylinder {
  constructor (r, h, v) {
    this.r = r,
    this.h = h
    this.v = Math.PI * (r * r) * h
  }
  cylinderVolume() {
    return `Volume;  ${this.v.toFixed(4)}`
  }
}
const cylinder1 = new Cylinder(2, 3)
console.log("cylinder", cylinder1.cylinderVolume())

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Output: Volume of this cylinder is  equal to 37.69911184307752

// Write the code that rounds the volume of the cylinder to four decimal places
// Volume of this cylinder is  equal to 37.6991

// Write the code that creates three unique cylinder objects
const cylinder2 = new Cylinder (4,5)

const cylinder3 = new Cylinder (6,7)

const cylinder4 = new Cylinder (8,9)

console.log("cylinder 2", cylinder2.cylinderVolume())
console.log("cylinder 3", cylinder3.cylinderVolume())
console.log("cylinder 4", cylinder4.cylinderVolume())


