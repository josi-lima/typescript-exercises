// *************** ENUMS *******************

// enums allow us to define a set of named constants we can reuse throughout our code.
// we can give these constants numeric or string values

// numeric enums
enum repliesA {
    oui,
    non,
    certainement,
}

enum repliesB {
    oui = 1,
    non = 2,
    certainement = 3,
}

// ==========================================

// string enums
enum grades {
    a = 'Excellent',
    b = 'Great',
    c = 'Satisfactory',
    d = 'Failed',
}

// ==========================================

// heterogenous enums
enum grades {
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

// ==========================================

// String Enum:
enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

// ==========================================
