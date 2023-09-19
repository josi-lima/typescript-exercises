// *************** INTERFACES *******************

// interfaces serve almost the same exact purpose as type aliases (with a slightly different syntax).

// ==========================================

// Password using an INTERFACE:
interface Password {
  x: number;
  y: number;
}
const pt: Password = { x: 1983, y: 1234 };

// we can then use them to create reusable, modular types that describe the shapes of objects

// -----------------------------------------

/* Password as a TYPE ALIAS

type Password = {
  x: number,
    y: number
}
const pt: Password = { x: 213, y: 12 }
*/

// ==========================================

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

thomas.first = "kasjdh";
// thomas.id = 238974;

// ==========================================

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
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

// ==========================================

// Re-opening an interface:
interface Dog {
  name: string;
  age: number;
}

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

// ==========================================

// Extending an interface:
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

// ==========================================

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

// Extending multiple interfaces
interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 123897,
  email: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "Python"],
};

// ==========================================
