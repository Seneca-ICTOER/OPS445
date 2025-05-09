---
id: assignment1c
title: Assignment 1 Version C
sidebar_position: 4
description: Assignment 1 Version C
---

# Assignment 1 Version C

## Overview

Your assignment will be to return an end date (including day of week), given a start date and number of days.

Example:

`python3 assignment1.py 20/09/2023 100`

```
The end date is Fri, 29/12/2023.
```

## Restrictions

:::danger

- You may **only use `sys` for parsing command line arguments**.
- No other modules are allowed

:::

## Instructions

The assignment will be broken into one milestone and one final submission. Please update your repository for the milestone and complete the final submission in order to earn all marks.

Deadlines will be given by your instructor.

---

### Preparation

1. Accept the assignment on Blackboard.
1. Once you accepted the assignment, you will get access to a starting repo.
1. Add your code to the _existing_ `assignment1.py` file.
1. Commit after **each significant change** to the code.
1. **You can never have too many commits.** GitHub is your proof of work and your backup if things go wrong.

### Milestone 1

1. You are provided with a function called `after()`. This function is complete and should successfully return the next day's date when provided with a starting date in `DD/MM/YYYY` format. You can experiment with this function by calling it in your main block. Then use the debugger inside VS Code to set a breakpoint and **step into** the function:

```python
if __name__ == "__main__":
    after('25/01/2023')
```

2. Use your understanding of `after()` to complete the `before()` function. This should return a previous day's date.

This Milestone will also ask you to _refactor_ your code. This means modifying existing code to make it more portable.

3. Complete the `leap_year()` function, using the relevant code that's already inside `after()`.
3. Edit your `after()` function. Replace any code that calculates leap years with a `leap_year` function call.  
3. Repeat the same process for the `mon_max()` function.
3. Verify that `after()` still works after your changes.
3. Don't forget to push your code.

#### Check Your Work

Use the check script to verify your work so far.

- `python3 checkA1.py -f -v TestAfter`
- `python3 checkA1.py -f -v TestBefore`
- `python3 checkA1.py -f -v TestLeap`
- `python3 checkA1.py -f -v TestMonMax`

### Continue Creating Your Functions

1. Complete the `day_iter()` function. Given a starting date and number of days, `day_iter()` should call either `after()` (if the number is positive) or `before()` (if the number is negative). inside of a loop. Once the loop as completed, this function should return the end date as a DD/MM/YYYY string.
1. Complete the `valid_date()` function. This should use error checking to make sure that any date entered by the user is valid.

#### Check Your Work

Use the check script to verify your work.

- `python3 checkA1.py -f -v TestValidDate`
- `python3 checkA1.py -f -v TestDayIter`

#### Feedback and Code Review

Your code needs to be within scope for the course. That means refer to the code you have completed as part of labs 1 - 5. 

Code that is outside the scope of the course will be flagged for code review. You will be asked to explain your code, and provide ways of making it adhere to the acceptable scope of the course. **Failure to attend code review or failure to understand the code you've submitted will be considered proof of academic dishonesty**.

I will provide you feedback on **GitHub**. Check the **Issues** tab, and make any changes that are required before the next deadline. You can **close the issue** to indicate that you have seen the comment.

---

### Final Submission

For the final submission you should integrate your functions into a working script, add relevant comments and implement some **error checking** so that invalid dates will cause a **usage** message to be displayed. In addition, if the second argument is not a valid number, usage should also be printed.

1. In the _main_ block, check the number of arguments. The first argument must be a valid date, and the second argument should be a valid number (positive or negative).
1. Call the `day_iter()` function and save the end date. Use the provided `day_of_week()` function to get the day.
1. Complete the `usage()` function. This should print a helpful message to the user when they make a mistake, and exit.

#### Final Checks

- `python3 checkA1.py -f -v TestFinal` to test the final version of your script. 

#### Submitting Your Code For Review

1. Push your code to GitHub before the deadline.

---

## Formatting And Style

A significant amount of your mark will be based on the things that _aren't_ your code. Please review the following guidelines to maximise your grade.

### Comments And Documentation

**You need to be commenting your code**. The following documentation is required:

- **in-line comments**: Any line of code that is doing something non-obvious should be commented. Explain **why** you are doing something, rather than **what** you are doing.
- **function docstrings**: After your `def` line, you enter a docstring inside "". Any function that doesn't already come with a docstring should have one.
- **top-level docstring**: You will have noticed that the top of your `assignment1.py` file already has this docstring. Complete the **Academic Honesty declaration** and complete the docstring.

### PEP

The [PEP-8 Style Guide](https://peps.python.org/pep-0008/) is an official Python document that describes best practices for formatting your code. **You should follow this guide as much as possible**. You may find that [using a linter](https://code.visualstudio.com/docs/python/linting) to check style to be useful. 

### Functions and Variables

- In addition to the required functions, you may create as many functions as you need.
- Functions should be in lower case, and spaces should be represented with an underscore. For example: `function_name`.
- Any data used inside of a function should be passed in as a parameter. Avoid global variables.

- Variables should have a sensible name. Avoid naming things `x`. Replace `x` with a more suitable name.
- Variables should be in lower case, and spaces represented by an underscore. For example: `start_date`.

### Git Commits

A workplace will have its own policy about how often to commit, and how to document commits. For us, **git commits are your proof of work**. Assignments that lack commits are subject to **Academic Integrity review**.

- A good practice is to create a commit for **every significant change** to your code. **At the very least, commit after completing each of the required functions.**
- An acceptable commit message needs to short, but should also describe the change. For example: `git commit -m "completed the leap_year function"`.

## Rubric

Element | Marks
--------|------:
**Milestone 1:** | 
TestAfter Checks | 3
TestBefore Checks | 3
TestLeap Checks  | 2
TestMonMax Checks | 2
**Milestone 2:** | 
TestValidDate Checks | 4
TestDayIter Checks | 6
**Final Submission:** |
TestFinal Checks | 8
Comments and Documentation | 10
Github Use | 6
Functions And Style | 3
Error Checking | 3

## Sample Output

`assignment1.py 18/05/2023 50`

```
The end date is Fri, 07/07/2023.
```

Works with a negative number:

`assignment1.py 21/05/2023 -50`

```
The end date is Sat, 01/04/2023.
```

Wrong number of arguments:

`assignment1.py 21/05/2023`

```
Usage: assignment1.py YYYY-MM-DD NN
```

If either the date or the number is invalid, print usage:

`assignment1.py 31/02/2023 gorilla`

```
Usage: assignment1.py YYYY-MM-DD NN
```
