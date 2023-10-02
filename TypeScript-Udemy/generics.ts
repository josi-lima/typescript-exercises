// *************** GENERICS *******************

// generics  allow us to define reusable functions and classes that work with multiples types rather than a single type

// --------------------------------------------

// Providing a type to querySelector:

// querySelector is a generic function that accepts a specific type within

// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// console.dir(inputEl);
// inputEl.value = "Hacked!";

// const btn = document.querySelector<HTMLButtonElement>(".btn")!;

// =============================================

// Without Generics... Lots of Repetition!
function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}

// =============================================

// With a Generic... Super Reusable!

// a reusable function type T, with a parameter type T and a return type T 
function identity<T>(item: T): T {
  return item;
}

identity<number>(7);
identity<string>("hello");

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
getRandomElement<number>([5, 6, 21, 354, 567, 234, 654]);

// typeScript infers the type without passing it, hover the element to check
getRandomElement([1, 2, 3, 4]);

// =============================================

// generics with more than one type parameter

// typeScript infers that the return type is an intersection between T & U
function mergeA<T, U>(object1: T, object2: U) {
  return {
    ...object1,  // spread operator
    ...object2,
  };
}

const basket = mergeA({veggie: "lettuce"}, {fruit: "mango"});
console.log(basket);
// { veggie: 'lettuce', fruit: 'mango' }

// =============================================

// Generics with constraints (allowed types)
function mergeB<T extends object, U extends object>(object3: T, object4: U) {
  return {
    ...object3,
    ...object4,
  };
}

const comboObj = mergeB({ name: "colt" }, { pets: ["blue", "elton"] });
console.log(mergeB({ name: "Colt" }, { num: 9 }));

mergeB<{ name: string }, { pets: string[] }>(
  { name: "colt" },
  { pets: ["blue", "elton"] }
);

// =============================================

// a generics that extends an interface

interface Lengthy {
  length: number;
}

// function to get the length of the word passed as a parameter

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

console.log(printDoubleLength("abcd"));  // 8
// printDoubleLength(234);  --> Not allowed!

// -------------------------------------------

// without generics, just using the interface

function printDouble(thing: Lengthy): number {
  return thing.length * 2;
}
console.log(printDouble("abc"));  // 6

// =============================================

// setting a default value in a generics

function makeEmptyArray<T = number>(): T[] {
  return [];
}

const nums = makeEmptyArray();
const booleans = makeEmptyArray<boolean>();

// =============================================

// A generic class example

interface Song {
  title: string;
  artist: string;
}
interface Production {
  title: string;
  director: string;
  mainActor: string;
}

// class type T
class Playlist<T> {
  public queue: T[] = [];
  add(item: T) {
    this.queue.push(item);
    return item;
  }
}

// -------------------------------------------

// class Playlist type Song
const songs = new Playlist<Song>();
const hit = songs.add({title: "Bicicleta", artist: "Shakira"});

console.log(`Song: ${hit.title} by ${hit.artist}.`);
// Song: Bicicleta by Shakira.

// -------------------------------------------

// class Playlist type Movie
const movies = new Playlist<Production>();
const cinema = movies.add({
  title: "Titanic", 
  director: "James Cameron", 
  mainActor: "Leonardo DiCaprio",
});

console.log(`Movie: ${cinema.title} by ${cinema.director} with ${cinema.mainActor}.`);
// Movie: Titanic by James Cameron with Leonardo DiCaprio.

// =============================================
