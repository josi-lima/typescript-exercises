// *************** TUPLES *******************

// tuples are arrays of fixed lengths and ordered with specific types

// these are NOT tuples:
const randomItems: (string | number)[] = [1, 'New York', 56, 'chair', 2]
const lotteryNums: number[] = [23, 45, 18, 34, 67, 10]

// ==========================================

// this is a tuple!
const color: [number, number, number] = [255, 0, 45];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

// ==========================================

// we can declare an array of tuples

// an array of tuples type HTTPResponse
const responses: HTTPResponse[] = [
  [200, "OK"],
  [404, "Not Found"],
  [503, "Service unavailable"],
];
console.log(responses);

// ==========================================

// Accessing Tuple Elements
// we can access tuple elements using index, the same way as an array, starting from zero.

const employee: [number, string] = [104, "Steve"];
employee[0];  // 104
employee[1];  // "Steve"

// ==========================================

// Adding elements into Tuple
// we can add new elements to a tuple using the push() method.

employee.push(203, "Bill"); 
console.log(employee);   
// [104, 'Steve', 203, 'Bill']

// This is allowed because we are adding number and string values to the tuple and they are valid for the 'employee' tuple.

// adding another type (not declared) in not allowed, for example try a boolean value.
// employee.push(true)  --> error

// ==========================================

// Enum Example:

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// String Enum:
enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

// ==========================================

