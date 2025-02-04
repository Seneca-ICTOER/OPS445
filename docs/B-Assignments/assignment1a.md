---
id: assignment1a
title: Assignment 1 Version A
sidebar_position: 2
description: Assignment 1 Version A
---

# Assignment 1 Version A

## Assignment 1

### Overview

Your assignment will calculate the number of weekend days (Saturdays and Sundays) within a given period of time. The time period in question will be calculated from a start date and an end date.

Example:

`python3 assignment1.py 2023-05-01 2023-05-30`

```text
The period between 2023-05-01 and 2023-05-30 includes 8 weekend days.
```


### Restrictions

- You may **only use `sys` for parsing command line arguments**.
- No other modules are allowed


### Instructions

The assignment will be broken into two milestones and one final submission. Please update your repository for each milestone and complete the final submission in order to earn all marks.

Deadlines will be given to you by your instructor.

---

**Preparation**

  1. Accept the assignment on Blackboard.
  2. Once you accepted the assignment, you will get access to a starting repo.
  3. Add your code to the _existing_ `assignment1.py` file.
  4. Commit after **each significant change** to the code.
  5. **You can never have too many commits**. GitHub is your proof of work and your backup if things go wrong.


**Milestone 1**

  1. You are provided with a function called `after()`. This function is complete and should successfully return the next day’s date when provided with a starting date in `YYYY-MM-DD` format. 
  
The function looks like this:

```python
  def after(date: str) -> str:
    '''
    after() -> date for next day in YYYY-MM-DD string format

    Return the date for the next day of the given date in YYYY-MM-DD format.
    This function takes care of the number of days in February for leap year.
    This fucntion has been tested to work for year after 1582
    '''
    str_year, str_month, str_day = date.split('-')
    year = int(str_year)
    month = int(str_month)
    day = int(str_day)
    lyear = year % 4
    if lyear == 0:
        feb_max = 29 # this is a leap year
    else:
        feb_max = 28 # this is not a leap year

    lyear = year % 100
    if lyear == 0:
        feb_max = 28 # this is not a leap year

    lyear = year % 400
    if lyear == 0:
        feb_max = 29 # this is a leap year

    tmp_day = day + 1 # next day

    mon_max = { 1:31, 2:feb_max, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31}
    tmp_day = day + 1  # next day

    if tmp_day > mon_max[month]:
        to_day = tmp_day % mon_max[month]  # if tmp_day > this month's max, reset to 1 
        tmp_month = month + 1
    else:
        to_day = tmp_day
        tmp_month = month + 0

    if tmp_month > 12:
        to_month = 1
        year = year + 1
    else:
        to_month = tmp_month + 0

    next_date = f"{year}-{to_month:02}-{to_day:02}"

    return next_date
```

You can experiment with this function by calling it in the main block with various arguments:

```python
if __name__ == "__main__":
  after('2023-01-25')
  after('2016-02-28')
  after('2025-12-31')
```

  2. Study the `after()` function and explain how it works. Use **in-line comments** for each line of code.

This Milestone will ask you to _refactor_ your code. This means modifying existing code to make it more portable.

  3. Complete the `leap_year()` function, using the relevant code that’s already inside `after()`.
  4. Edit your `after()` function. Replace any code that calculates leap years with a `leap_year` function call.
  5. Repeat the same process for the `mon_max()` function.
  6. Verify that `after()` still works after your changes.
  7. Don’t forget to push your code.

**Check Your Work**

Use the check script to verify your work so far.

```bash
python3 CheckA1.py -f -v TestAfter
```

```bash
python3 CheckA1.py -f -v TestLeap
```

```bash
python3 CheckA1.py -f -v TestMonMax
```

**Feedback**

I will provide you feedback on **GitHub**. Check the **Issues** tab, and make any changes that are required before the next deadline. You can **close the issue** to indicate that you have seen the comment.


---

**Milestone 2**

  1. Complete the `day_count()` function. Given a starting date and ending_date, `day_count()` should call `after()` inside of a loop. For each date (including the start and end dates), your function should call the provided `day_of_week()` function. Count each Saturday and Sunday, and return that number as an integer.
  2. Complete the `valid_date()` function. This should use error checking to make sure that any date entered by the user is valid.

**Check Your Work**

Use the check script to verify your work.

- `python3 CheckA1.py -f -v TestValidDate`
- `python3 CheckA1.py -f -v TestDayCount`

**Feedback**

Once again I will provide you feedback on **GitHub**. Check the **Issues** tab, and make any changes that are required before the next deadline. You can **close the issue** to indicate that you have seen the comment.


---

**Final Submission**

For the final submission you should integrate your functions into a working script, add relevant comments and implement some **error checking** so that invalid or dates will cause a **usage** message to be displayed. In addition, the earlier date should always be considered the **start date** even if the **user enters the dates in the wrong order**.

  1. In the _main_ block, check the number of arguments. Both arguments should be valid dates.
  2. Create or research a function to verify that the start date is always earlier than the end date. Failing to do so will cause an infinite loop.
  3. Print the number of weekend days in the given time period.
  4. Complete the `usage()` function. This should print a helpful message to the user when they make a mistake, and exit.

**Final Checks**

- `python3 CheckA1.py -f -v TestFinal` to test the final version of your script.

**Submitting Your Code For Review**

  1. Push your code to GitHub before the deadline.
  2. In addition, **submit your code to Blackboard**. A link will be provided.


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
| TestAfter Checks | 2 |
| TestLeap Checks | 2 |
| TestMonMax Checks | 2 |
| **Milestone 2:** |  |
| TestValidDate Checks | 4 |
| TestDayCount Checks | 6 |
| **Final Submission:** |  |
| TestFinal Checks | 8 |
| Comments and Documentation | 10 |
| github use | 10 |
| functions and style | 2 |


### Sample Output

`assignment1.py 2023-05-18 2023-06-04`

```text
The period between 2023-05-18 and 2023-06-04 includes 6 weekend days.
```

**Works with the dates reversed:**

`assignment1.py 2023-05-21 2023-05-01`

```text
The period between 2023-05-01 and 2023-05-21 includes 6 weekend days.
```

**Wrong number of arguments:**

`assignment1.py 2023-05-21`

```text
Usage: assignment1.py YYYY-MM-DD YYYY-MM-DD
```

**If either of the dates is invalid, print usage:**

`assignment1.py 2023-02-31 2023-99-99`

```text
Usage: assignment1.py YYYY-MM-DD YYYY-MM-DD
```
