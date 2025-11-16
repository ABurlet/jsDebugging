# jsDebugging

SCRIPT 1  Calculator Functions

Issues Found
The divide() function returned a string on division by zero ("Error: Division by zero"), which caused inconsistent return types.
-One of the test expectations was incorrect (subtract(10, 4) expected 5 instead of 6).
-No test coverage for division by zero, negative numbers, multiplication by zero, large numbers, non-integer inputs


Fixes Applied
-Changed divide-by-zero behavior to return NaN so the function always returns a number
-Repaired incorrect expected value in subtraction test
-Added a reusable test() helper function
-Added comprehensive edge-case tests


New Test Coverage Includes Negative numbers (add(-2, -3)), Zero cases (multiply(12345, 0)), Division by zero using Number.isNaN(), Large numbers, Subtraction resulting in a negative value



SCRIPT 2 Login Validation Function

Issues Found
-Login credentials were (admin / 1234), which limited functionality.
-There was missing validation for wrong username, wrong password, both invalid, long strings, empty inputs, special characters, One test case had an incorrect expected value.

Fixes Applied
I cleaned up and reorganized the test cases, added multiple missing tests, ensured test names clearly describe their purpose, ensured all invalid combinations came back as false, added edge case tests


New test coverage includes wrong username and correct password, correct username and wrong password, both wrong, long usernames, special characters in username and/or password, string scenarios


SCRIPT 3 Shopping Cart Functions
The isssues that I found
-removeItem() was case-sensitive. So, removeItem("apple") would not remove "Apple" because of the "A".
-addItem("Banana", 0) incorrectly added an item instead of stopping.
-there was no testing for removing items not in the cart, duplicate items or empty cart scenarios.
The existing test failed because of faulty cart logic.


Fixes Applied
- I made removeItem() case-insensitive
- I prevented zero items from being added
- I reset cart before each test to avoid test contamination
- I added tests for duplicates, removal of non-existent items, empty cart totals, removing from an empty cart

New Test Coverage Includes adding duplicate items (quantities add correctly), removing an item that isn’t in the cart (total unchanged), getting total from an empty cart, attempting to remove from an empty cart

Debugging Techniques Used

Throughout the project, I used several QA debugging techniques.
-Console logging to verify expected vs. actual values
-Systematic reproduction of failures
-Isolation of functions to test independently
-Refactoring repeated code using helper functions
-Edge-case exploration (stress tests, invalid inputs, zeros, special characters)
-Input validation checks
-Lowercasing & normalization to avoid case-sensitivity bugs.

These steps helped ensure each script handled both normal and extreme inputs predictably.

Challenges Faced
-Maintaining Consistent Return Types
Handling division by zero without breaking test comparisons required careful thought (switching to NaN solved this cleanly).

-Hardcoded Login Logic
Testing invalid inputs was limited by the login function itself. I worked around this by expanding tests and validating expected behavior.

-Case-Sensitivity Bugs in Shopping Cart
Transforming both the cart items and the input to lowercase fixed the “apple” vs. “Apple” removal problem.

-Ensuring Tests Did Not Interfere With Each Other
Resetting the cart before each test prevented cross-test contamination.
