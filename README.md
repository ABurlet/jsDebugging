# jsDebugging

SCRIPT 1  Calculator Functions

Issues Found

The divide() function returned a string on division by zero (Error: Division by zero), which caused inconsistent returns.
-One of the test expectations was incorrect (subtract(10, 4) expected 5 instead of 6).
-There was no test coverage for division by zero, negative numbers, multiplication with zero, large numbers, non-integer inputs


Fixes Applied

-I changed the division by zero to return 'NaN' so that the function always returns a number
-I fixed the incorrect expected value in subtraction test
-I added a reusable test() helper function
-I added edge case tests as advised in the project


The new test coverage includes negative numbers add(-2, -3), zero cases which multiply(12345, 0), division by zero using Number.isNaN(), large numbers, subtraction resulting in a negative value



SCRIPT 2 Login Validation Function

Issues Found

-The login credentials were (admin / 1234), which limited the functionality.
-There was missing validation for wrong the username, the wrong password, both wrong username and password, long strings, empty inputs, special characters.
-One test case had an incorrect expected value.

Fixes Applied

-I cleaned up and reorganized the test cases
-I added multiple missing tests
-I ensured test names clearly describe their purpose
-I made sure invalid combinations came back as false
-I added edge case tests as advised


The new test coverage includes tests for wrong username and correct password, correct username and wrong password, both wrong, long usernames, special characters in username and/or password, string scenarios


SCRIPT 3 Shopping Cart Functions

The issues that I found

-removeItem() was case-sensitive. So, removeItem("apple") would not remove "Apple" because of the "A".
-addItem("Banana", 0) incorrectly added an item instead of stopping.
-there was no testing for removing items not in the cart, duplicate items or empty cart scenarios.
-the existing test failed because of faulty cart logic.


Fixes Applied
- I made removeItem() case-insensitive
- I prevented zero items from being added
- I reset the cart before each test to avoid the tests from being mixed up.
- I added tests for duplicates, removal of non-existent items, empty cart totals, removing from an empty cart

The new test coverage includes adding duplicate items (quantities add correctly), removing an item that isn’t in the cart (total unchanged), getting total from an empty cart, attempting to remove from an empty cart



Debugging Techniques I Used

Throughout the project, I used several debugging techniques.
-Console logging to verify expected vs. actual values
-Reproduction of failures
-Isolating functions to test each scenario independently
-Refactoring repeated code using helper functions
-Edge-cases (stress tests, invalid inputs, zeros, special characters)
-Input validation checks
- Used lowercase insensitivity to avoid case-sensitivity bugs.

These steps helped to ensure that each script handled both normal and extreme inputs predictably.

Challenges Faced

-Maintaining Consistent Return Types
Handling division by zero without breaking test comparisons required careful thought and some research. I found that witching to NaN solved this cleanly.

-Login Logic
Testing invalid inputs was limited by the login function itself. I worked around this by adding test cases and validating expected behavior.

-Case-Sensitivity Bugs in Shopping Cart
Changing both the cart items and the input to lowercase fixed the “apple” vs. “Apple” issue.

-Ensuring Tests Did Not Interfere With Each Other
Resetting the cart before each test prevented cross-test confusion.
