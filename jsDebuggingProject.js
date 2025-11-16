//SCRIPT 1 Calculator Functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return NaN;   // return NaN is used for division by zero so the return is always "number"
  }
  return a / b;
}

// function for less repetition
function test(name, actual, expected) {
  if (actual === expected) {
  console.log(name + ": Pass"); }
  else {
    console.log(name + ": Fail (expected" + expected + ", got " + actual +")" );
  }
}

// test cases
test("Addition Test 1", add(5, 3), 8);
test("Subtraction Test 1", subtract(10, 4), 6);      // fixed expected value
test("Multiplication Test 1", multiply(7, 6), 42);
test("Division Test 1", divide(12, 4), 3);

// edge cases
test("Addition with negative numbers", add(-2, -3), -5);
test("Subtraction resulting negative", subtract(3, 10), -7);
test("Multiplication with zero", multiply(12345, 0), 0);
test("Division by zero returns NaN", Number.isNaN(divide(10, 0)), true);







// SCRIPT 2 login Validation Function
function validateLogin(username, password) {
  if (!username || !password) {
    return false; // Missing input check is correct
  }
  if (username === "admin" && password === "1234") {
    return true; // Only valid login credentials are hardcoded
  }
  return false;
}

// Test Cases
console.log("Login Test 1:",
  validateLogin("admin", "1234") === true ? "Pass" : "Fail"
);

console.log("Login Test 2:",
  validateLogin("", "1234") === false ? "Pass" : "Fail" //missing username
);


console.log("Login Test 3:",
  validateLogin("admin", "") === false ? "Pass" : "Fail" //missing password
); 

// Additional Tests for invalid username/password combinations

// wrong username and correct password
console.log("Login Test 4 (wrong username):",
  validateLogin("user", "1234") === false ? "Pass" : "Fail"
);

// correct username and wrong password
console.log("Login Test 5 (wrong password):",
  validateLogin("admin", "0000") === false ? "Pass" : "Fail"
);

// wrong username and wrong password
console.log("Login Test 6 (both invalid):",
  validateLogin("user", "0000") === false ? "Pass" : "Fail"
);

// Edge case tests for long strings and special characters

// very long username
console.log("Login Test 7 (long username):",
  validateLogin("adminadminadminadmin", "1234") === false ? "Pass" : "Fail"
);

// username with special character
console.log("Login Test 8 (special char in username):",
  validateLogin("admin!", "1234") === false ? "Pass" : "Fail"
);

// password with special character
console.log("Login Test 9 (special char in password):",
  validateLogin("admin", "1234!") === false ? "Pass" : "Fail"
);






// SCRIPT 3 shopping cart functions

// Shopping Cart Functions
let cart = [];

function addItem(item, quantity) {
  if (quantity < 1) {
    console.log("Error: Quantity must be at least 1");
    return;
  }
  cart.push({ item, quantity });
}

function removeItem(item) {
  cart = cart.filter(
    (cartItem) => cartItem.item.toLowerCase() !== item.toLowerCase()
  ); // make it case-insensitive so "apple" also removes "Apple" 
}

function getCartTotal() {
  return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
}

// test cases
cart = []; 
addItem("Apple", 3);
addItem("Banana", 0); // This should cause an error and avoid adding to cart
removeItem("apple");  // Now this gets rid of "Apple" regardless of upper or lowercase 

// cart should be empty so total should be 0
console.log("Cart Total Test 1:",
  getCartTotal() === 0 ? "Pass" : "Fail"
); // this was failing before due to upper and lowercase bug


// Missing Tests

// adding duplicate items
cart = [];
addItem("Orange", 1);
addItem("Orange", 2); // same item
console.log("Duplicate Items Test:",
  getCartTotal() === 3 ? "Pass" : "Fail"
);

// removing an item not in the cart
cart = [];
addItem("Grapes", 5);
removeItem("Pineapple"); // not in theb cart and should not change the total
console.log("Remove Non-Existent Item Test:",
  getCartTotal() === 5 ? "Pass" : "Fail"
);

//Handling empty cart scenarios

// getting total from empty cart
cart = [];
console.log("Empty Cart Total Test:",
  getCartTotal() === 0 ? "Pass" : "Fail"
);

// removing something from an empty cart 
removeItem("Anything");
console.log("Remove From Empty Cart Test:",
  getCartTotal() === 0 ? "Pass" : "Fail"
);
