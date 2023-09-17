// *************** ARRAYS *******************

// arrays can be typed using a type annotation followed by empty array brackets 
// example: number[] for an array of numbers

// ------------------------------

// type empty array, not possible to alter, update or assign anything to it
const nothing: [] = [];

// ------------------------------

// String array
const activeUsers: string[] = ['Enrique', 'Martinica'];
activeUsers.push("Tony");

console.log(activeUsers);
// [ 'Enrique', 'Martinica', 'Tony' ]

// ------------------------------

// Array of numbers
const ageList: number[] = [45, 56, 13];
ageList[0] = 99;

console.log(ageList);   
// [ 99, 56, 13 ]

// ------------------------------

// Alternate Syntax:
const bools: Array<boolean> = []
// const bools: boolean[] = [];

// ------------------------------

// custom types of arrays

type City = {
  a: string;
  b: string;
  c: string;
};

// array of type 'City'
const cities: City[] = [];
cities.push({
  a: 'New York', 
  b: 'Amsterdam', 
  c: 'Paris'
});
console.log(cities);

// ------------------------------

// Multi-dimensional string array
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

// ------------------------------
