// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object   
// const coffeeType = new Coffee("Black") 
// console.log(coffeeType)
// => Coffee { type: 'black', cream: undefined, sugar: undefined }

// Write the code that outputs the black coffee's profile
// => console.log(coffeeType.coffeeProfile())

// Write the code that makes a coffee object with 1 cream and 2 sugars
// const creamSugar = new Coffee( "",1,2)
// console.log(creamSugar)
// =>  Coffee { type: '', cream: 1, sugar: 2 }

// Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(creamSugar.coffeeProfile())
// => // A  coffee with 1 cream, 2 sugars

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
const coffeeType = new Coffee("Black") 
console.log(coffeeType)
console.log(coffeeType.coffeeProfile())
const creamSugar = new Coffee( "",1,2)
console.log(creamSugar)
console.log(creamSugar.coffeeProfile())
// Coffee { type: 'black', cream: undefined, sugar: undefined }
// A black coffee with undefined cream, undefined sugar
// Coffee { type: '', cream: 1, sugar: 2 }
// A  coffee with 1 cream, 2 sugars

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.

class Latte {
    constructor(flavor,milkType,shots) {
        this.flavor = flavor.toLowerCase()
        this.milkType = milkType.toLowerCase()
        this.shots = shots
    }
    latteProfile() {
        return `your ${this.flavor} latte,${this.milkType} consist of ${this.shots} shot(s)`
    }}
    const regular = new Latte("regular","",1)
    // console.log(regular)
    // console.log(regular.latteProfile())
    const hazelNut = new Latte("hazelnut","almond milk",2)
    console.log(hazelNut.latteProfile())
    console.log(hazelNut)
