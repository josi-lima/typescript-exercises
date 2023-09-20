// *************** INTERFACES *******************

// interfaces serve almost the same exact purpose as type aliases (with a slightly different syntax).

// key-difference: we have to use a type alias instead of an interface if we are not describing the shape of an object

// ==========================================

// Password using an INTERFACE:
interface Password {
  x: number;
  y: number;
}
const pin: Password = { x: 17983, y: 12345 };

// we can then use them to create reusable, modular types that describe the shapes of objects, ONLY objects.

// -----------------------------------------

/* Password as a TYPE ALIAS

type Password = {
  x: number,
    y: number
}
const pt: Password = { x: 213, y: 12 }
*/

// ==========================================

// readonly and optional interfaces properties

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi(): string;
  // sayHi: () => string;
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 21837,
  sayHi: () => {
    return "Howdy!";
  },
};
console.log(thomas.sayHi());

thomas.first = "Caleb";
// thomas.id = 238974;  
// --> cannot assign to 'id' because it is a read-only property

// ==========================================

// another method in interfaces

interface Bird {
  name: string;
  sing: () => string;
}

const littleBird: Bird = {
  name: "humming bird",
  sing: () => {
    return 'lalala';
  },
};
console.log(littleBird.sing());

// ==========================================

// methods with parameters in interfaces

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {  
    const newPrice = this.price * (1 - amount);
    return newPrice;
  },
};
console.log(shoes.applyDiscount(0.4));

 // the parameter can take the same name declared in the interface, or not.

// ==========================================

// Re-opening an interface

// Another thing we can do with interfaces is reopen and add new properties to interfaces after we've already described an interface.

interface Dog {
  name: string;
  age: number;
}

// reopening the interface Dog is common when code is spread across files
interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "WOOF WOOF!";
  },
};

// it will generate an error if we try to reopen a type alias

// ==========================================

// Extending an interface

// we can extend an interface or essentially inherit from another interface (similar to the way with object oriented programming)

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "guide dog",
};
console.log(chewy)

// ==========================================

// Extending multiple interfaces

// interfaces can extend multiple other interfaces, with multiple inheritance.

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

// extending the interfaces from right above

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
  hobby?: string;
}

const pierre: Engineer = {
  name: "Pierre",
  id: 123897,
  email: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "Python", "Java"],
};
console.log(pierre);

// ==========================================
