const dog = {
  name: "dog",
  legs: 4,
  language: "bow",
};
const cat = {
  name: "cat",
  legs: 4,
  language: "meiaow",
};
console.log("animal " + dog["name"] + " Speaks " + dog["language"]);
console.log("animal " + cat["name"] + " Speaks " + cat["language"]);

// here we have to create variable with same key values again and again
// classes solves it for us
// we can create a animal class and give structure to it and then create a object of it and things get done for you

// here is a class example

class Animal {
  constructor(name, legs, language) {
    this.name = name;
    this.legs = legs;
    this.language = language;
  }
  static myType() {
    console.log("Animal");
  }
  languages() {
    console.log("Language of " + this.name + " is " + this.language);
  }
}

let doggie = new Animal("dog", 4, "bow"); // creating an object of class
let cittie = new Animal("cat", 4, "meiaow");
doggie.languages();
cittie.languages();
console.log(Animal.myType()); // Static methods can be called by class directly
console.log(Animal.language()); // other mehods can't be called by class directly
