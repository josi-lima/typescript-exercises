// *************** OBJECTS *******************

// arrow function with objects as parameters
// return expected: type void
const printName = (person: { first: string; last: string }): void => {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: "Anne", last: "Frank" });

// ==========================================

// object with the properties 'first' and 'last' of the function printName
const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);

// if we assign it to a variable, it's possible to add more properties without throwing an error
// TypeScript is only going to check for the properties we outined in the function

// ==========================================

// object with its types assigned to a variable on the same line
let years: { x: number; y: number } = { x: 2016, y: 1985 };
console.log(years)

// ==========================================

// function without parameters, with a return type annotation of an object literal
const coordinates = (): { x: string; y: number } => {
  return { x: Math.random().toFixed(5), y: Math.random() };
}
console.log(coordinates())

// toFixed() method formats a number using fixed-point notation, it returns a string

// ==========================================

// the order of the properties in an object does not matter, for example when we call a function with an object as a parameter. 

const createUser = (employee: {
  username: string;
  email: string;
  isAdmin: boolean;
}) => {
  return employee;
};

const newEmployee = {
  isAdmin: true, 
  username: 'Oliver Duvet',
  email: 'oli.duvet@gmail.com',
}
console.log(createUser(newEmployee));

// ==========================================

// declare object types in a type alias

// a type alias
type Person = {
  name: string;
  age: number;
}

// with destructuring:
const sayHappyBirthday = ({name, age}: Person): string => {
  return `Hey ${name}, congrats on turning ${age}!`; 
}
console.log(sayHappyBirthday({name: 'Renato', age: 38}));

// ------------------------------

// without destructuring: 

// const sayHappyBirthday = (person: Person): string => {
//   return `Hey ${person.name}, congrats on turning ${person.age}!`; 
// }
// console.log(sayHappyBirthday({name: 'Renato', age: 38}));

// ==========================================

type Points = {
  x: number;
  y: number;
};

let coordinate: Points = { x: 34, y: 2 };

function randomCoordinate(): Points {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Points): Points {
  return { x: point.x * 2, y: point.y * 2 };
}

// ==========================================

// Working with type alias and nested objects

// a type alias
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { 
    producer: string; 
    writer: string 
  };
};

// object with another nested object
const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

// ------------------------------

// function that takes the number of streams and calculates the earnings per song
const calculatePayout = (song: Song): number => {
  return song.numStreams * 0.0033;
}

const earnings = calculatePayout(mySong);
console.log(earnings);

// ------------------------------

// function that prints the title and the artist of a determined song
const printSong = (song: Song): void => {
  console.log(`${song.title} - ${song.artist}`);
}
printSong(mySong);

// ==========================================

// optional properties

// property 'three' is optional because of the question mark
type Food = {
  one: string;
  two: string;
  three?: string;
};

const faveFoods: Food = { one: 'pizza', two: 'lasagna' };
console.log(faveFoods);

// ==========================================

// readonly modifier
// we can mark an element as readonly, so it will not be possible to modify it

type User = {
  readonly id: number;
  username: string;
};

// assigning values
const user: User = {
  id: 12837,
  username: "Anne",
};
console.log(`${user.id}, ${user.username}`);

// it's not possible to reassign user.id, only user.username
user.username = 'John';
console.log(user.username);

// when working with an object or an array, we can still work with them since they're reference types

const toys: readonly string[] = ['doll', 'puzzle', 'ball'];
const filteredToys = toys.filter(item => item !== 'doll')
console.log(filteredToys);   // [ 'puzzle', 'ball' ]
 
// const filteredToys = toys.filter(item => item === 'doll')
// const filteredToys = toys.map((item, index) => ({toy: item, index}))

// ==========================================

// intersection types

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

// type alias, with a direct intersection between two arrays by using an ampersand
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

// ==========================================

// intersection type with an additional element

type Cat = {
  numLives: number;
};
type Dog = {
  breed: string;
};

type CatDog = Cat & Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};
console.log(christy);
// { numLives: 7, breed: 'Husky', age: 9 }

// ==========================================
