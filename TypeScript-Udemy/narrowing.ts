// *************** TYPE NARROWING *******************

// typeof Type Guards involves simply doing a type check before working with a value

// typeof works with primitive types

function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}
console.log(triple("ha"));
// hahaha

console.log(triple(25));  // 75

// =============================================

// truthiness type guards involve checking a value for being truthy or falsy before working with it 

// truthiness narrowing
const printLetters = (word?: string): string | undefined => {
  if (word) {
    for (let char of word) {
      return char;
    }
  } else {
    return "INVISIBLE WORD!";
  }
};

console.log(printLetters());
// INVISIBLE WORD!

// =============================================

// equality type guards involve comparing types to each other before doing certain operations with values

// equality narrowing
function someData(x: string | number, y: string | boolean) {
  if (x === y) return x.toUpperCase();
}
console.log(someData("party time!", "party time!"));
// PARTY TIME!

// =============================================

// typeScript's in operator helps check if a certain property exists in an object

// defining interfaces
interface Movies {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

const getRuntime = (media: Movies | TVShow) => {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

console.log(getRuntime({ title: "Amadeus", duration: 140 }));  // 140
console.log(
  getRuntime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 30 })  // 2400
);

// =============================================

// instanceof is TS operator that allows us to check if one thing is an instance of another, which means, if a value is within the prototype chain of another element

// it can help us to narrow types when working with classes, for example

// instanceof narrowing
const printFullDate = (date: string | Date) => {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}
printFullDate("09/23/2023");
// Sat, 23 Sep 2023 03:00:00 GMT

// ------------------------------------------

// working with instanceof and classes
class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}

// =============================================

// typeScript allows us to write custom functions that can narrow the type of a value 
// type predicate is how we name the return of this function

// declaring interfaces
interface Cats {
  name: string;
  numLives: number;
}
interface Dogs {
  name: string;
  breed: string;
}

// type predicate --> parameterName is type
function isCat(animal: Cats | Dogs): animal is Cats {
  return (animal as Cats).numLives !== undefined;
}

function makeNoise(animal: Cats | Dogs): string {
  if (isCat(animal)) {
    animal;
    return "Meow";
  } else {
    animal;
    return "Woof!";
  }
}

console.log(makeNoise({name: "Bettie", breed: "Shih Tzu"}));
// Woof!

// =============================================

// discrimated unions is a common pattern in TypeScript, it involves creating a literal property that is common across multiple types

// we can then narrow the type by using the literal property

// Discriminated Unions
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

// Note: in this example, all the interfaces have the same properties; however, they could have different ones and it would work normally

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Moooo!";
    case "rooster":
      return "Cockadoodledoo!";
    case "sheep":
      return "Baaa!";
    default:
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
      // We should never make it here, if we handled all cases correctly
      //   const shouldNeverGetHere: never = animal;
      //   return shouldNeverGetHere
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));
// Cockadoodledoo!

// =============================================

