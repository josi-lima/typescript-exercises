// *************** LITERAL TYPES *******************

// literal type '0', not common to be used this way though
let zero: 0 = 0;

// ==========================================

// literal type with union types
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

// ==========================================

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

// literal types with a type alias
type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Sunday";

const worstDayOfWeek = (day: DayOfWeek): string => {
  return day === 'Monday' ? "Worst day of the week!" : "That's fine!";
}
console.log(worstDayOfWeek('Monday'));   // Worst day of the week!

// ==========================================
