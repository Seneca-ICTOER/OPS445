---
id: assignment1ncc
title: Assignment 1 NCC
sidebar_position: 3
description: Assignment 1 for Section NCC
---

# A1-S23-NCC

## Assignment 1

### Overview

Your assignment will be to create a script that can correctly print future and past dates. The script will divide a typical year by a given value. For example, 365 divided by 2 will be rounded to 182. Your script will then the correct date 182 days into the past and 182 days into the future.

Example:

`./assignment1.py 2023-01-25 2`

```text
A year divided by 2 is 182 days.
The date 182 days ago was 2022-07-27.
The date 182 from now will be 2023-07-26.
```

### Restrictions

- You may **only use `sys` for parsing command line arguments**.
- No other modules are allowed


### Instructions

The assignment will be broken into two milestones and one final submission. Please update your repository for each milestone and complete the final submission in order to earn all marks.

- Milestone 1 will be due on **June 8**.
- Milestone 2 will be due on **June 14**.
- The Final submission will be due on **June 22**.

---

**Preparation**

  1. Accept the assignment on Blackboard.
  2. Once you accepted the assignment, you will get access to a starting repo.
  3. Clone the repo to your local VM.
  4. Add your code to the _existing_ `assignment1.py` file.
  5. Commit after **each significant change** to the code.
  6. **You can never have too many commits**. GitHub is your proof of work and your backup if things go wrong.


**Milestone 1**

  1. You are provided with a function called `after()`. This function is complete and should successfully return the next day’s date when provided with a starting date in `YYYY-MM-DD` format. You can experiment with this function by importing it into the Python interpreter:

```python
from assignment1 import after
after('2023-01-25')
```

  2. Study the `after()` function and explain how it works. Use **in-line comments** for each line of code.
  3. Use the `after()` function as a guide, and complete the `before()` function. This function should perform the opposite: it should return the previous day’s date.
  4. Don’t forget to push your code.


**Check Your Work**

Use the check script to verify your work so far.

`python3 CheckA1.py -f -v TestBefore`


**Feedback**

I will provide you feedback on **GitHub**. Check the **Issues** tab, and make any changes that are required before the next deadline. You can **close the issue** to indicate that you have seen the comment.


**Submission**

  - Take the screenshots of the output of check scripts. Add the screenshots in the files named: milstone1_testBefore.jpg
  - Commit this file to the repository.
  - Commits must be done before the deadline, a 20% deduction of marks applies to late submissions per day.
  - In addition submit the file milstone1_testBefore.jpg to Blackbaord, a link will be provided.

---

**Milestone 2**

This Milestone will ask you to refactor your code. This means modifying existing code to make it more portable.

  1. Complete the `leap_year()` function, using the relevant code that’s already inside `after()`.
  2. Edit your `after()` function. Replace any code that calculates leap years with a `leap_year` function call.
  3. Verify that `after()` still works.
  4. Complete the `dbda()` function. Given a starting date and number of days, `dbda()` should call either `before()` or `after()` inside of a loop and return the end date. A negative number of days should return a date _before_ start_date, and a postive number should return a date _after_ start_date.

**Check Your Work**

Use the check script to verify your work.

  - `python3 CheckA1.py -f -v TestLeap` to test your `leap_year()` function.
  - `python3 CheckA1.py -f -v TestAfter` to test `after()` and ensure it’s still working.
  - `python3 CheckA1.py -f -v TestDBDA` to test `dbda()`.

**Submission**

  - Take the screenshots of the output of check scripts. Add the screenshots in the files named: milstone2\_leap.jpg, milstone2\_after.jpg, milstone2\_dbda.jpg
  - Commit these three files to repository.
  - Commits must be done before the deadline, a 20% deduction of marks applies to late submissions per day.
  - In addition submit these three files to Blackboard, a link will be provided.


---

**Final Submission**

For the final submission you should integrate your functions into a working script, add relevant comments and implement some **error checking** so that invalid dates or arguments will cause a **usage** message to be displayed.

  1. In the _main_ block, check the number of arguments. The first argument should be a valid date, and the second should be a divisor of a typical year (365 days).
  2. A divisor of **2** would mean dividing a year by half. This gives us 182 days. (This is rounded down, use the `round()` function).
  3. Print the number of days for the divisor.
  4. Use one call to `dbda()` to return the date that’s **182 days** before the start date.
  5. Use a second call to `dbda()` to return the date that’s **182 days** after the start date.

At this point you have a working script. Implement error checking:

  1. Complete the `usage()` function. This should print a helpful message to the user when they make a mistake, and exit.
  2. Complete the `valid_date()` function. This should use error checking to make sure that any date entered by the user is valid.
  3. Ensure that the **divisor** argument is not zero! This would cause a Divide by zero error.

**Final Checks**

  - `python3 CheckA1.py -f -v TestValidDate` to test your `valid_date()` function.
  - `python3 CheckA1.py -f -v TestFinal` to test the final version of your script.

**Submitting Your Code For Review**

  1. Push your code to GitHub before the deadline.

        - Take the screenshots of the output of check scripts. Add the screenshots in the files named: finalSubmission\_TestValidDate.jpg, finalSubmission\_TestFinal.jpg
        - Commit these two files to repository.
        - Commits must be done before the deadline, a 20% deduction of marks applies to late submissions per day.

  2. In addition, **submit your code and the screenshots (finalSubmission\_TestValidDate.jpg, finalSubmission\_TestFinal.jpg) to Blackboard**. A link will be provided


---

### Formatting And Style

A significant amount of your mark will be based on the things that _aren’t_ your code. Please review the following guidelines to maximise your grade.


**Comments And Documentation**

**You need to be commenting your code**. The following documentation is required:

  - **in-line comments**: Any line of code that is doing something non-obvious should be commented. Explain **why** you are doing something, rather than **what** you are doing.
  - **function docstrings**: After your `def` line, you enter a docstring inside ““. Any function that doesn’t already come with a docstring should have one.
  - **top-level docstring**: You will have noticed that the top of your `assignment1.py` file already has this docstring. Complete the **Academic Honesty declaration** and complete the docstring.

**PEP**

The [PEP-8 Style Guide](https://peps.python.org/pep-0008/) is an official Python document that describes best practices for formatting your code. **You should follow this guide as much as possible**. You may find that [using a linter](https://code.visualstudio.com/docs/python/linting) to check style to be useful.


**Functions and Variables**

  - In addition to the required functions, you may create as many functions as you need.
  - Functions should be in lower case, and spaces should be represented with an underscore. For example: `function_name`.
  - Any data used inside of a function should be passed in as a parameter. Avoid global variables.
  - Variables should have a sensible name. Avoid naming things `x`.
  - Variables should be in lower case, and spaces represented by an underscore. For example: `start_date`.

**Git Commits**

A workplace will have its own policy about how often to commit, and how to document commits. For us, **git commits are your proof of work**. Assignments that lack commits are subject to **Academic Integrity review**.

  - A good practice is to create a commit for **every significant change** to your code. **At the very least, commit after completing each of the required functions**.
  - An acceptable commit message needs to short, but should also describe the change. For example: `git commit -m "completed the leap_year function"`.


### Rubric

| **Element** | **Marks** |
| :--- | :--- |
| **Milestone 1:** |  |
| Documentation for `after` function | 4 |
| TestBefore Checks | 6 |
| **Milestone 2:** |  |
| TestAfter Checks | 6 |
| TestLeap Checks | 2 |
| TestDBDA Checks	 | 2 |
| **Final Submission:** |  |
| TestValidDate Checks | 4 |
| TestFinal Checks | 12 |
| Comments and Documentation | 2 |
| github use | 2 |


### Sample Output

`./assignment1.py 2023-01-25 2`

```text
A year divided by 2 is 182 days.
The date 182 days ago was 2022-07-27.
The date 182 from now will be 2023-07-26.
```

`./assignment1.py 2020-02-14 4`

```text
A year divided by 4 is 91 days.
The date 91 days ago was 2019-11-15.
The date 91 from now will be 2020-05-15.
```

`./assignment1.py 2023-02-29 3`

```text
Error: wrong day entered
Usage: ./assignment1.py YYYY-MM-DD division
```

`./assignment1.py 2001-13-01`

```text
Usage: ./assignment1.py YYYY-MM-DD division
```

`./assignment1.py 2001-13-01 5`

```text
Error: wrong month entered
Usage: ./assignment1.py YYYY-MM-DD division
```

`./assignment1.py 2011-12-01 0`

```text
Usage: ./assignment1.py YYYY-MM-DD division
```
