---
id: assignment2a
title: Assignment 2 Version A
sidebar_position: 5
description: Assignment 2 Version A
---

# Assignment 2 Version A

## Assignment 2

### Overview

Create a script that presents information about process memory usage in a user friendly way.

Processes are a way of abstracting the different threads on a Linux system. Whenever you run a program from the terminal, or launch an application from the GUI, you start one or more processes. Processes require memory and CPU time until they are closed or finish. You have already learned about investigating processes using commands such as `ps` or `top`. Your task will be to create a basic program similar to these.


**Program Function**

When your script runs without arguments, it will show how much is memory is being used out of the total available:

`./assignment2.py`

```text
Memory         [############        | 62%] 9408404/15221204
```

When your scripts is passed the name of a program, it will show how much memory each process is running:

`./assignment2.py firefox`

```text
248203         [                    | 0%] 73872/15221204
248165         [                    | 0%] 73544/15221204
248163         [                    | 0%] 74020/15221204
248154         [                    | 0%] 50444/15221204
247738         [                    | 1%] 103872/15221204
247715         [                    | 1%] 124872/15221204
247422         [                    | 0%] 54212/15221204
247301         [#                   | 3%] 388440/15221204
firefox        [#                   | 6%] 943276/15221204
```

Using the `-H` option will have your program output memory totals in **human readable format** (GiB instead of billions of bytes).

Using the `-l` option with a number will adjust the length of the **bar graph**.

Please see the **Sample Output** section for more details.

**How It Works**

**Total Memory Use**

Information about processes can be found in the `/proc` directory. Use `ls` to investigate this location now. Pay particular attention to the directories that are named after process IDs (pids) and files such as `meminfo`.

When we calculate memory usage on a Linux machine, we have to take many things into account: unused memory is considered _wasted_, and so available memory is often used to _cache_ data that is no longer is use, but may need to be accessed in the future. Generally any memory that isn’t **free, or being used for buffering or caching** is considered **in use**.

Memory that is considered _available_ is that which can be used to start new applications without swapping.

**For simplicity’s sake, for this assignment “Memory in use” = Total Memory - Available Memory.**

Both of these memory amounts can be found inside the `/proc/meminfo` file.


**Tracking Processes For A Running Program**

For this assignment, we will ask you to get the Process ID numbers (pids) of an application using the `pidof` command. As you will discover, simple CLI programs like `grep` might only use a single process, whereas a more complex GUI program like Firefox will use several.


**Memory Use Per Process**

Memory usage for a single process can be very complex. When an application starts, a process will map a block of memory for possible usage. This is **Virtual Set Size (Vss)**. This number will not actually tell you how much _physical memory_ is actually being used by the process.

**Resident Memory (Rss)** is closer to the actual amount of physical memory used by a process. However, a block of memory might be shared across several processes, the Resident memory amount inaccurate.

When you use a tool such as **Process Monitor** or **top**, generally the memory amount being reported is **Rss**. So for simplicity’s sake, **for this assignment the memory used by a process should be the resident total.**

The total amount of Rss memory can be found in `/proc/pid`, where pid is the process id number. In this directory you will find a file called `smaps`. Your program will need to read this file, find each line that begins with **Rss**, and sum the number to get total Rss memory used.

For more information on how memory and /proc in Linux refer to these manual pages:

  - `man 5 proc`
  - `man free`
  - [This page](https://www.golinuxcloud.com/check-memory-usage-per-process-linux/) is also an excellent explanation of memory.

**TL;DR**: The process we are using for this assignment is not accurate, but it will get us close enough!

### Restrictions

- You may **only use the following modules**:  
    - argparse
    - os
    - sys
- No other modules are allowed

### Instructions

The assignment will be broken into two milestones and one final submission. Please update your repository for each milestone and complete the final submission in order to earn all marks.

Deadlines will be provided by your instructor.

---

**Getting Started**

  1. Accept the assignment on Blackboard.
  2. Once you accepted the assignment, you will get access to a starting repo.
  3. Add your code to the _existing_ `assignment2.py` file.
  4. Commit after **each significant change** to the code.
  5. **You can never have too many commits**. GitHub is your proof of work and your backup if things go wrong.

**First Milestone**

Complete the following functions. The function definitions are already provided in the `assignment2.py` file:

  - percent\_to\_graph()
  - get\_sys\_mem()
  - get\_avail\_mem()

**Percent to Graph Function**

This function will convert a float between **0.0 - 1.0** into a string of hash symbols and spaces: ‘**####**’.

This will require you to use a _scaling_ formula.

![Scaling Formula](/img/Scaling-formula.png "Image of Scaling Formula")

**Get Total and Available System Memory**

`get_sys_mem()` and `get_avail_mem()` will both use `open()` to open the `/proc/meminfo` file, and return the relevant memory amounts as **integers.**

*Note For WSL Users:*

For whatever reason, WSL does not include the `MemAvailable` row. But you can easily get this value by returning the sum of `MemFree` and `SwapFree`.

Once you have completed these functions, you have everything you need to **print the total memory used graph** as you have seen at the top of this page!


**Checking Your Work**

A check script is provided to you in the repository. Run the following checks to verify your work:

`python3 ./checkA2.py -f -v TestPercent`

`python3 ./checkA2.py -f -v TestMemFuncs`


**Feedback**

I will provide you feedback on **GitHub**. Check the **Issues** tab, and make any changes that are required before the next deadline. You can **close the issue** to indicate that you have seen the comment.


**Second Milestone**

Complete the following functions:

  - parse\_command\_args()
  - pids\_of\_prog()
  - rss\_mem\_of\_pid()

**Command Arguments Using Argparse**

You will be using a module in the standard library called **Argparse**. This will help handle more complex sets of options and arguments than simply using sys.argv. Refer to the [argparse documentation](https://docs.python.org/3/howto/argparse.html#id1) to complete the parse_command_args function. At minimum, your assignment should handle the following options and arguments:

  - `-h` will print a usage message. This will automatically be created by argparse itself, you will not need to implement this. However, refer carefully to the sample output and ensure that your help message matches the required output.
  - `-H` will print file sizes in Human readable format. For example, 1024 bytes will be printed as 1KiB, 1024 kilobytes will be printed as 1MiB, and so on.
  - `-l <number>` will set the maximum length of the bar graph. The default should be 20 character. This option will require an option argument that is an integer.
  - Your script will also check for one optional positional argument which contains the name of a running program for scanning.

A function has been provided for you, most of the work is already complete. However, you will have to add one more option to it in order to get full marks.

Your assignment should be able to produce the following:

`./assignment2.py -h`

```bash
usage: assignment2.py [-h] [-H] [-l LENGTH] [program]

Memory Visualiser -- See Memory Usage Report with bar charts

positional arguments:
  program               if a program is specified, show memory use of all
                        associated processes. Show only total use if not.

options:
  -h, --help            show this help message and exit
  -H, --human-readable  Prints sizes in human readable format
  -l LENGTH, --length LENGTH
                        Specify the length of the graph. Default is 20.

Copyright 2023
```

**Checking Your Work**

Run the following checks to verify your work:

`python3 ./checkA2.py -f -v TestParseArgs`

`python3 ./checkA2.py -f -v TestPidList`

`python3 ./checkA2.py -f -v TestPidMem`


**Feedback**

I will provide you feedback on **GitHub**. Check the **Issues** tab, and make any changes that are required before the next deadline. You can **close the issue** to indicate that you have seen the comment.


**Final Submission**

For the final step, you will need to tie everything together:

  - Use the `args` object to check the options and arguments inputted by the user.
  - Display the output in formatted columns. You will probably want to use f-strings, and set a specific width for each variable so that everything lines up.
  - Make sure the `-H` and `-l` options change your output.


**Add Human Readable Output**

The `meminfo` file has been storing memory amounts in _kibibytes_ (kiB). One kibibytes equals 1024 bytes and is the correct way of presenting a number of bytes in a human readable format.

When the user uses the option `-H`, your script should present the amount of memory using mebi (MiB), gibi (GiB) or tebibytes (TiB).

This function is provided for you, but you should **comment this code to explain how it works**.


**Final Checks**

Run the check script without arguments to verify all parts of your assignment. Output will be checked manually.

`python3 ./checkA2.py -f -v`


**Submitting Your Code For Review**

  1. Push your code to GitHub before the deadline.
  2. In addition, **submit your code to Blackboard**. A link will be provided.


### Other Considerations

A significant amount of your mark will be based on the things that _aren’t_ your code. Please review the following guidelines to maximise your grade.


**Comments And Documentation**

**You need to be commenting your code**. The following documentation is required:

  - **in-line comments**: Any line of code that is doing something non-obvious should be commented. Explain **why** you are doing something, rather than **what** you are doing.
  - **function docstrings**: After your `def` line, you enter a docstring inside ““. Any function that doesn’t already come with a docstring should have one.
  - **top-level docstring**: You will have noticed that the top of your `assignment2.py` file already has this docstring. Complete the **Academic Honesty declaration** and complete the docstring.

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
| TestPercent Checks | 4 |
| TestMemFuncs Checks | 6 |
| **Milestone 2:** |  |
| TestParseArgs Checks | 2 |
| TestPidList Checks | 4 |
| TestPidMem Checks	 | 4 |
| **Final Submission:** |  |
| Final Checks | 10 |
| Output Presentation | 5 |
| Comments and Documentation | 5 |
| github use | 5 |
| functions and style | 2 |
| error checking | 3 |


### Sample Output

`./assignment2.py`

```bash
Memory         [#############       | 65%] 9890952/15221204
```

`./assignment2.py firefox`

```bash
295117         [                    | 1%] 76748/15221204
295071         [                    | 1%] 76692/15221204
295067         [                    | 1%] 76500/15221204
295065         [                    | 0%] 51912/15221204
294659         [                    | 1%] 119720/15221204
294629         [                    | 2%] 228976/15221204
294606         [                    | 0%] 62112/15221204
294524         [                    | 2%] 379096/15221204
firefox        [#                   | 7%] 1071756/15221204
```

`./assignment2.py -H firefox`

```bash
295117         [                    | 1%] 74.95 MiB/14.52 GiB
295071         [                    | 1%] 74.89 MiB/14.52 GiB
295067         [                    | 1%] 74.89 MiB/14.52 GiB
295065         [                    | 0%] 50.70 MiB/14.52 GiB
294659         [                    | 1%] 109.53 MiB/14.52 GiB
294629         [                    | 1%] 145.89 MiB/14.52 GiB
294606         [                    | 0%] 60.66 MiB/14.52 GiB
294524         [                    | 2%] 327.28 MiB/14.52 GiB
firefox        [#                   | 6%] 918.79 MiB/14.52 GiB
```

`./assignment2.py -l 40 nvim`

```bash
293104         [                                        | 0%] 22636/15221204
nvim           [                                        | 0%] 22636/15221204
```

`./assignment2.py -l 50`

```bash
Memory         [##################################                | 68%] 10282860/15221204
```

`./assignment2.py oopsie`

```bash
oopsie not found.
```

`./assignment2.py -h`

```bash
usage: assignment2.py [-h] [-H] [-l LENGTH] [program]

Memory Visualiser -- See Memory Usage Report with bar charts

positional arguments:
  program               if a program is specified, show memory use of all
                        associated processes. Show only total use if not.

options:
  -h, --help            show this help message and exit
  -H, --human-readable  Prints sizes in human readable format
  -l LENGTH, --length LENGTH
                        Specify the length of the graph. Default is 20.

Copyright 2023
```
