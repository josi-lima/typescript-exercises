// *************** UNION TYPES *******************

// union types allow us to give a value a few different possible types by using the pipe character

// Basic Union Type:
let age: number | string = 21;

// reasigning the variable
age = 23;
age = "24";

// ==========================================

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

// Union type with type aliases, use let to be able to alter it
let position: Point | Loc = { x: 120, y: 34 };
position = { lat: 321.213, long: 23.334 };

// Union Type with Arrays
const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 213, y: 43 });

// ==========================================

// Function with a parameter union type that accepts a type number or string
function printAge(age: number | string): void {
  console.log(`You are ${age} years old.`);
}
printAge(38);

// -----------------------------------------------

// On this example, price could be a number or a string depending on the $ sign in it
// the conditional establishes a type narrowing

function calculateTax(price: number | string, tax: number) {
  if (typeof price === 'string') {
    price = parseFloat(price.replace("$", ""));
  }
  return (price * tax).toFixed(2);
}
console.log(calculateTax('$130.50', .07))   // 9.14

// ==========================================

// Examples of regular array types
const countdown: number[] = [5, 4, 3, 2, 1];
const stuff: any[] = [1,2,3,4, true, "cake", {}];

// union type of numbers OR strings as a single array
const basket: (number | string)[] = [10, 78, 30, 'luckyNumbers'];

// -----------------------------------------------

// Don't confuse with this other case

// union type of an array of numbers OR an array of strings 
let differentItems: number[] | string[] = [89, 25, 33, 4];
differentItems = ['ruby', 'esmerald', 'diamond'];

console.log(differentItems);
// [ 'ruby', 'esmerald', 'diamond' ]

// ==========================================


