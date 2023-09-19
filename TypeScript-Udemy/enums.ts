// *************** ENUMS *******************

// enums allow us to define a set of named constants we can reuse throughout our code.
// we can give these constants numeric or string values


// hover the enums to check their values
enum repliesA {
    oui,
    non,
    certainement,
}

// when we create an enum and we don't specify any values, TypeScript just assigns an implicit numeric value starting at zero upwards.

// if we assign a numeric value to an enum, the implicit one is replaced

enum repliesB {
    oui = 10,
    non = 20,
    certainement = 30,
}

// ==========================================

// string enums
enum grades {
    a = 'Excellent',
    b = 'Great',
    c = 'Satisfactory',
    d = 'Failed',
}

// --------------------------------

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
  }
  
// ==========================================

// heterogenous enums
enum direction {
    north = 'North',
    south = 1,
    east = 2,
    west = 'West',
}

// ==========================================

// more examples of enums

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
const myStatus = OrderStatus.DELIVERED;

const isDelivered = (status: OrderStatus) => {
  return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(OrderStatus.RETURNED));   // false

// -----------------------------------

// also possible:

const enum MyOrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}

// assigning enums to a variable avoids all the extra code enums generate when code in TypeScript is compiled to JavaScript

// ==========================================
