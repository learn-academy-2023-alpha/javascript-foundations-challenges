
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
  // Write the code that makes a black coffee object
//   const black = new Coffee("black", 4, 4)
// // Write the code that outputs the black coffee's profile
// console.log(black.coffeeProfile());
// Write the code that makes a coffee object with 1 cream and 2 sugars
const black2 = new Coffee("black", 1, 2)
// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(black2.coffeeProfile());

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
class Latte {
    constructor(flavor, milkType, shots) {
      this.flavor = flavor
      this.milkType = milkType
      this.shots = shots
    }
  
    latteProfile() {
      return `A ${this.flavor} latte with ${this.milkType}, ${this.shots} shots`
    }
  
    
      }
    
  
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
const newLatte = new Latte("regular", "whole milk", 2)
// Log the regular, single shot latte's profile
console.log(newLatte.latteProfile());
// Write the code that makes a double shot, hazelnut latte with almond milk.
const newLatte2 = new Latte("hazlenut", "almond milk", 2)
// Log the double shot, hazelnut latte with almond milk's profile.
console.log(newLatte2.latteProfile());

// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
class Cylinder {
    constructor(radius, height){
this.radius = radius
this.height = height
    }
    volumeProfile(){
        return `The volume of the cylinder is ${this.volume()}`
    }
    volume(){
        let volume = Math.PI * (this.radius * this.radius) * this.height
    return volume.toFixed(4)
} 
surfaceArea() {
    let area = 2 * Math.PI * this.radius * this.height + 2 * Math.PI * (this.radius * this.radius)
    return area.toFixed(4)
}
areaProfile(){
    return `The area of the cylinder is ${this.surfaceArea()}`
}
} 

// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
const cylinder1 = new Cylinder(3, 6)
console.log(cylinder1.volumeProfile());
const cylinder2 = new Cylinder(2, 5)
console.log(cylinder2.volumeProfile());
const cylinder3 = new Cylinder(4, 7)
console.log(cylinder3.volumeProfile())
console.log(cylinder1.areaProfile());



// surface area of a cylinder


