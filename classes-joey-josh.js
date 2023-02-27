// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile

class Coffee {
  constructor(type, cream, sugar) {
    this.type = type
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

const blackCoffee = new Coffee("black",0,0)
console.log(blackCoffee.coffeeProfile())
//-->A black coffee with 0 cream, 0 sugar


const creamNSugarCoffee = new Coffee("black",1,2)
console.log(creamNSugarCoffee.coffeeProfile())
//--> A black coffee with 1 cream, 2 sugars

// Latte Maker: create a class for Latte
class Latte {
    constructor(flavor, milk, shots) {
      this.flavor = flavor
      this.milk = milk
      this.shots = shots
    }

    latteProfile() {
        return ` your Latte: ${this.flavor} with ${this.milk} milk and has ${this.shots} shot(s)`
    }
}
const latte = new Latte("Regular","Whole", 1)
console.log(latte.latteProfile())
//-->  your Latte: Regular with Whole milk and has 1 shot(s)

const hazelnutLatte = new Latte("Hazenut","Almond",2)
console.log(hazelnutLatte.latteProfile())
//--> your Latte: Hazenut with Almond milk and has 2 shot(s)

// Write a Latte class that takes a flavor, a milk type, and a number of shots (DONE)
// Write a method for your Latte class that outputs the latte's profile (DONE)
// Write the code that makes a regular, single shot latte (DONE)
// Log the regular, single shot latte's profile (DONE)
// Write the code that makes a double shot, hazelnut latte with almond milk.(DONE/ line 61-62)
// Log the double shot, hazelnut latte with almond milk's profile.(DONE)


// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

class Cyclinder {
    constructor(radius, height) {
        this.radius = radius 
        this.height = height
        this.volume = (3.1415 * (radius * radius) * height).toFixed(4)
    }
    calcVolume() {
        return `For a cyclinder with a radius of ${this.radius} and a height of ${this.height}, your volume is ${this.volume}`
    }
}

const vol1 = new Cyclinder(20,66.343434)
console.log(vol1.calcVolume())
const vol2 = new Cyclinder(1.5454,55.343434)
console.log(vol2.calcVolume())
const vol3 = new Cyclinder(2,2)
console.log(vol3.calcVolume())

//-->For a cyclinder with a radius of 20 and a height of 66.343434, your volume is 83367.1592
// For a cyclinder with a radius of 1.5454 and a height of 55.343434, your volume is 415.2264
// For a cyclinder with a radius of 2 and a height of 2, your volume is 25.1320

