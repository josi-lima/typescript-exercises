// *************** LITERAL TYPES *******************

// Literal Types

// a function with a literal + union type parameter
// can provide one of the literal from the union type 

const wouldYouMarryme = (answer: 'yes' | 'no' | 'maybe') => {
  return `The answer is ${answer}!`
}
console.log(wouldYouMarryme('yes'));
// The answer is yes!

// cannot provide anything else
// wouldYouMarryme('Oh, boy! I am not sure!')  --> error

// ==========================================

let zero: 0 = 0;

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Sunday";