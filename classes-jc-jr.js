// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile

// class Coffee {
//     constructor(type, cream, sugar) {
//         this.type = type.toLowerCase()
//         this.cream = cream
//         this.sugar = sugar
//     }

//     coffeeProfile() {
//         return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//     }

//     creams() {
//         if (this.cream > 1) {
//             return `${this.cream} creams`
//         } else {
//             return `${this.cream} cream`
//         }
//     }

//     sugars() {
//         if (this.sugar > 1) {
//             return `${this.sugar} sugars`
//         } else {
//             return `${this.sugar} sugar`
//         }
//     }
// }

// const blackCoffee = new Coffee("black", "no", "no")
// console.log(blackCoffee)
// console.log(blackCoffee.coffeeProfile())

// // Coffee { type: 'black', cream: 'no', sugar: 'no' }
// // A black coffee with no cream, no sugar

// const coffee = new Coffee("regular", "1", "2")
// console.log(coffee)
// console.log(coffee.coffeeProfile())

// Coffee { type: 'regular', cream: '1', sugar: '2' }
// A regular coffee with 1 cream, 2 sugars

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.

// class Latte {
//     constructor(flavor, milkType, shots) {
//         this.flavor = flavor.toLowerCase()
//         this.milkType = milkType
//         this.shots = shots
//     }
// }

class Latte {
    constructor(flavor, milkType, shots) {
        this.flavor = flavor.toLowerCase()
        this.milkType = milkType
        this.shots = shots
    }
  
    coffeeProfile() {
      return `A ${this.flavor} latte with ${this.milkType}, ${this.shots}`
    }
  
    milkType() {
        return `${this.milkType}`
    }
    shots() {
      if (this.shots > 1) {
        return `${this.shots} shots`
      } else {
        return `${this.shots} shot`
      }
    }
  }

// const latte = new Latte("plain", "regular milk", "single shot")
// console.log(latte)
// console.log(latte.coffeeProfile())

// Latte {
//     flavor: 'plain',
//     milkType: 'regular milk',
//     shots: 'single shot'
//   }
//   A plain latte with regular milk, single shot

const latte = new Latte("hazelnut", "almond milk", "double shot")
console.log(latte)
console.log(latte.coffeeProfile())

// Latte {
//     flavor: 'hazelnut',
//     milkType: 'almond milk',
//     shots: 'double shot'
//   }
//   A hazelnut latte with almond milk, double shot