
// Below will be the Unit test specifications.

Unit test specifications should state the following below : 
Expect [action] to be [some result]
Example: For the prompt "A function called "addition" that returns the sum of two input integers", your tests might include:
Expect addition(2, 3) to be a number
Expect addition(2, 3) to be equal to 5
Expect addition("a", 3) to be an error

// Functional test specifications worded more naturally.

Functional test specifications can be worded slightly more naturally:
When a user [does something with some parameters], [some thing should happen]
Example: For the prompt was "A login and signup page that allows Single Sign-On with Google", your tests might include:

- When a user clicks "Log In" without filling in any information, they should be shown an error and prompted to sign up if they have not yet.

- When a user clicks "Log In" but has filled out an incorrect login or password, they should be shown an error and prompted to sign up if they have not yet.

- When a user clicks "Log In" and has filled in their login and password correctly, they should be taken to their dashboard.

- When a user clicks "Create Account" without filling in any information, they should be shown an error.

- When a user clicks "Create Account" with an invalid email address or password, they should be shown an error.

- When a user clicks the "Sign Up with Google" button, they should be taken through the Google authentication process.

- When a user clicks "Log In with Google", they should be logged in through Google, or taken through the Google authentication process if they do not already have an account.

// Below will be the function called "multiplication".

Unit Tests:

A function called "multiplication" that returns the product of the two input numbers.
Expect multiply (2, 2) to be a number.
Expect multiply (2, 2) to be equal 4 (===4).
Expect multiply ("a", 2) to be error as the data isn't sufficient.

// Below is the function called "concatOdds".

A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
...should result in [-1, 1, 3, 9, 15]

Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave:

1. What should happen with unexpected inputs?

2. What kinds of unexpected inputs should we worry about?

3. What should happen when there are multiples of the same odd number in the arrays? (Hint: We gave you the answer to this one in the example above.)

1. Expect "unexpected inputs" to be an error.

2. The "unexpected inputs" we should worry about should be strings and booleans.

3. Multiples will not repeat. The will instead present themselves as a single value. 

// A functional test displays the the features designed from the above prompt.

Functional Tests:

A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.

Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:

1. What should happen if the cart is empty?

2. What needs to be shown to the user at each step of check out?

3. What behaviors of this feature does the prompt miss or gloss over?

Hint: Observe the shopping cart and checkout features of some popular websites to get some ideas!


1. When a user decides to check out with an empty cart, they should be suggested items to in order to create an incentive to place items in the cart.

2. When a user does check out while logged in, their address and payment info should be recalled to offer a quality of life feature.

3. When a user is checking out while they are logged in, they could be given a discount or even suggested a discount in order to reaffirm a purchase.









