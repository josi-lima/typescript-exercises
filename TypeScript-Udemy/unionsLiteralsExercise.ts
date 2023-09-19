// ******************* PART 1 *******************

// Create a variable called highScore that can be a number OR a boolean.

let highScore: number | boolean = 7;
highScore = false;

// ******************* PART 2 *******************

// Create an array called basketOfThings. It can be an array of numbers OR an array of strings.
// It cannot be an array of numbers and strings (mixed together).

let basketOfThings: number[] | string[] = ['corn', 'eggplant', 'mushroom'];
basketOfThings = [3, 5, 10]; 

// ******************* PART 3 *******************

// Create a literal type called SkillLevel.
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert".

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"; 

// ******************* PART 4 *******************

// Create a type called SkiSchoolStudent, in which name must be a string, age must be a number, sport must be "ski" or "snowboard" and level must be a value from the SkillLevel type (from above).

type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: 'ski' | 'snowboard';
    level: SkillLevel;
}

// ******************* PART 5 *******************

// Define a type to represent an RGB color, in which 'r' should be a number, 'g' should be a number and 'b' should be a number.

type RGB = {
    r: number;
    g: number;
    b: number;
}

// Define a type to represent an HSL color, in which 'h' should be a number, 's' should be a number and 'l' should be a number.

type HSL = {
    h: number;
    s: number;
    l: number;
}

// Create an array called colors that can hold a mixture of RGB and HSL color types.

const colors: (RGB | HSL)[] = [];
colors.push({r: 255, g: 34, b: 240}); 
colors.push({h: 0, s: 120, l: 230}); 

// ******************* PART 6 *******************

// Write a function called greet that accepts a single string OR an array of strings.
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format.

const greet = (person: string | string[]): void => {
    if (typeof person === "string") {
        console.log(`Hello, ${person}!`);
    } else {
        for(let p of person) {
            console.log(`Hello, ${p}!`);
        }
    }
}
greet(['Chaves', 'Quico', 'Chiquinha']);
// Hello, Chaves!
// Hello, Quico!
// Hello, Chiquinha!

// ==========================================
