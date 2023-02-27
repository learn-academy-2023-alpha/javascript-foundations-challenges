// Coffee marker: copy the given Coffee class into a text editor
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

// type() {
//     return (this.type = "")
// }

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

const coffee1 = new Coffee("black", 0, 0)
console.log(coffee1.coffeeProfile())


const coffee2 = new Coffee("matcha", 1, 2)
console.log(coffee2.coffeeProfile())




// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.

class Latte {
    constructor(flavor, milkType, shots) {
        this.flavor = flavor,
        this.milkType = milkType,
        this.shots = shots
    } 
    latteProfile () {
        return `A ${this.flavor} latte with ${this.shots} ${this.milkType} shots`
    } 
    // flavor() {
        
    // }
}

const latte1 = new Latte("regular", "", 1)
console.log(latte1.latteProfile())

const latte2 = new Latte("hazelnut", "almond milk", 2)
console.log(latte2.latteProfile())


// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

class Cylinder {
    constructor(radius, height) {
        this.radius = radius,
        this.height = height
        this.π = 3.14159
    } 
    cylinderVolume () {
        return (this.π * (this.radius ** 2) * this.height).toFixed(4)
    }
}

const volume = new Cylinder(3, 5)
console.log(volume.cylinderVolume())

const cylinder1 = new Cylinder(6, 5)
console.log(cylinder1.cylinderVolume())

const cylinder2 = new Cylinder(9, 4)
console.log(cylinder2.cylinderVolume())

const cylinder3 = new Cylinder(2, 8)
console.log(cylinder3.cylinderVolume())

