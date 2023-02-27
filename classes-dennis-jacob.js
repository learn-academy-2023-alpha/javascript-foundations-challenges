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


const creamy = new Coffee("",1,2)
//  const black = new Coffee("black",2,3)
// console.log(creamy.coffeeProfile())


// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile

class latte  {
    constructor(flavor,milktype,numberofshots){
        this.flavor = flavor
        this.milktype = milktype
        this.numberofshots = numberofshots
    }
latteType() {
    return  `A ${this.flavor} with ${this.milktype} milk and ${this.numberofshots} `
    }


//   numberofshots() {
//     if (this.numberofshots > 1) {
//       return `${this.numberofshots} shot`
//     } else {
//       return `${this.numberofshots} shots`
//     }
// }

}

const latte1 = new latte("latte", "2 percent", 3)
const latte2 = new latte("latte", "", (1))
// console.log(latte1.latteType())
console.log(latte1.latteType())

// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects