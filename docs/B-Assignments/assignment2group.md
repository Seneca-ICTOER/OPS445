---
id: assignment2group
title: Assignment 2 Group Assignment
sidebar_position: 7
description: Assignment 2 Group Assignment
---

# Assignment 2: Group Assignment 

## Overview

This will be a group assignment. You will be working in a group of 4 - 5 students. Every student will need to contribute code to their assignment. 

You are asked to **choose a task** for this assignment. Consider the topics you have learned during your college career. What topics could be completed using a Python script? What are some common jobs you might expect to do on a Linux machine running in the workplace?

Consider some possibilities:

- Data backups and restore
- System monitoring and alerts
- System reports and metrics
- Diagnostics and health
- Automated system configuration
- Network configuration and subnetting
- User reports and management
- Security auditing

Other options are possible. Bring your ideas to the first meeting for approval.

## Restrictions

- Your assignment should be contained in one or more .py files, but should be executed from a file called `assignment2.py`.
- You can import any modules from the Python standard library, but third-party modules are not permitted. 
- Your assignment should use the `argparse` module to handle command line options and arguments. Refer to their [documentation](https://docs.python.org/3/howto/argparse.html) for help.
- Your assignment must be able to run on either **Matrix**, **MyVMLab**, or one the **virtual machines** you have set up for this course. You will demonstrate the usage of your assignment on one of these machines.
- All the code and required files will be inside your repository. You should clone your repo onto the Linux machine you are using to demonstrate your assignment, and I should be able to run `git log` to see the commits you've made.
- Any additional configuration needed to get your assignment working (ie. you need to make changes to system configuration files) must be documented and included in your repository.

## The Design Process (As It Occurs In The Real World)

All project plans are focused on identifying _blocking tasks_ (that is, tasks that need to completed before other tasks can even be started on) and then prioritising those tasks. Researching possible solutions, for example, is necessary before we ever start writing a line of code. 

The design process should look like this:

1. Identify problems
1. Research solutions
1. Break the solutions into 1 or more functions (with input and output)
1. Complete the required functions
1. TEST!
1. Complete the main block
1. TEST!
1. Write comments and documentation
1. Merge into the main branch

When you complete this process for your Minimum Viable Product, you can start to _iterate_ upon the code. Suggest improvements, polish the presentation of the output, experiment with additional features. 

## The Design Process (For This Assignment)

This assignment will take some time to complete. Be sure to start early and identify obstacles as quickly as possible.

### Initial Meetup

- You will be assigned to a group. Meet with your group members, and arrange methods of communication (email, Teams, etc.) A **Discussion Topic** on **Blackboard** is provided for you.
- Begin discussing a topic for your assignment. **It is strongly recommended you have 2-3 ideas** in case your first choice isn't suitable.
- Every group member should verify that their **git** configuration is set to identify them using their **myseneca email**. Note: use `git config user.email` on each of your devices to verify this. 

### Proposal Meeting

These will be done either online or in-person, and it is expected that **all group members are attending and ready to contribute**.

- Provide your 2 - 3 topic ideas
- Be prepared to answer some questions:
    - How will your program gather required input?
    - How will your program accomplish its requirements? 
    - What output will be presented?
    - What arguments or options will be included?
    - What aspects of development do you think will present the most challenge?
- Provide a plan for completion, and a method for dividing the work:
    - What research will be required to make things work? 
    - Identify functions that _need_ to be complete before other parts will work.
    - Who will write these functions? Who will work on the main block?
    - How will you test your work?
    - How much progress do you hope to have made by next week? By the end of week 2?

This meeting will be a dialogue, since there might be some changes or suggestions that come up during our initial meeting. It's not necessary to **get everything right on the first try**, projects often go longer than expected! But you should have at least thought about some of these questions.

Once you have gotten approval for your script, you will get access to your repository for development. **Include the description, overview and summary of the above questions** inside your repository's `README.md` file.

::: important

You will receive an email from GitHub inviting you to collaborate on the group repository. **Accept the invite ASAP because it will expire after a couple of days**. If you miss the first invite, you will get a second chance but **you will lose 50% of marks for commits.** If you miss the second invite, you will receive a **zero** for assignment 2.

:::

### Contributing to the Assignment

:::warning

In order to measure your contributions to the assignment, **I will be looking at the commits you make that become part of the main branch**. Read the next section carefully. If you attempt to bypass the proper procedure for making commits and pull requests, you will not receive marks for your contributions.

:::

There is an additional restriction: **Don't push to the main branch**. This is a common restriction in the workplace, where the main branch is protected.

Group members should decide which functions they are working on, and then create a branch to commit to. Once a function is complete, they will open a pull request and their group members can approve it. The code then becomes part of the 'main' branch.

Instructions for these processes are listed below.

#### Setting Up Branches

- From GitHub, it is recommended that you create a branch for each member of your group. Click the 'main' drop-down and select 'Create a new branch'. Enter your name, or a label for the feature you are working on.
- From your local computer, run `git clone` to clone your repo.
- Now you will need to checkout your specific branch in order to commit. Run `git checkout <name of branch>`
- If you get an error that the branch doesn't exist, you can create it locally by running `git checkout -b <name of branch>`
- Verify the branch you are on by using `git status`
- You will now be able to commit and push to that branch.

::: warning

**Do not commit another group member's code, or share the repository with students with no access**. In the workplace, this would be considered a **security breach** and is a **fireable offense**. If you commit another student's code or share the repository with someone that lacks permission, **you will receive a zero for the assignment**.

:::

#### Pull Requests

When group members finish a feature that will become part of the assignment, they will need to open a _pull request_. 

- From GitHub, select the 'main' branch. You will see a message that your branch is 'X commits ahead of main' and an option to 'Open a Pull Request'. Click that. 
- Describe your changes. You will now need approval from 1-2 members of the group to approve your pull request.

I have prepared a [short video](https://youtu.be/gqa59TkMH1w) that demonstrates this entire process.

###  Research

Your research findings should be included as comments in the `assignment2.py` file, or in the README. Your research should include **links to any websites or external resources** that you used. You should bring any **books** you used to code review for inspection.

### Completing the Assignment

Once the code is considered complete, you will use a new feature to define the final version of your code: tag your commit 'final' when you have completed the assignment.

#### Adding The Final Tag

This should be your final step, once you have completed your work, approved all pull requests, and your 'main' branch now contains all required code and documentation.

- From GitHub, find the section called 'Releases' inside the right panel.
- Click on 'Create A New Release'.
- Click on 'Choose a tag' and create a new tag called 'v1.0'. Make sure that branch is set to 'main'.
- Complete the form to give the release a title of 'Final' and add a description of what's working and what isn't.
- Click on 'Publish Release'.
- Use this version of the code for your demonstration. From your demonstration machine, do a `git pull` command. Use `git log` to verify that you have checked out the main branch, and that the tag for the most recent commit is 'v1.0'.

I will be verifying this when it's time to demonstrate your assignment.

### Assignment Demonstration and Code Review

On the day of your demonstration, again **all group members are expected to
attend**. 

- For in-person sections, the assignment should be running on Matrix, MyVMLab, or one of your Linux VMs.
- For online sections, I will clone your repository and run it locally.
- Use `git status` and `git log` in the repository directory.
- I will run the code, and evaluate the user experience, command line arguments, and readability of the output.
- I will ask you specific questions about how your code works. If you wrote the
  code, you will be required to explain.

At the conclusion of your Code Review, the assignment is considered complete. I will use the commit tagged 'final' on **GitHub** to evaluate your work. 

### Post-Mortem

There is an additional **Post-Mortem** due on Blackboard. These forms are **individual** each student must write their own.

### Commits

Students are graded on how much they contributed to the final version of the assignment. **Remember that in the workplace, git commits are your proof of work**. Use your myseneca email address, document your contributions, and contribute fairly to your group.

## Rubric

### Group Mark

Criteria | Points
---------|--------
**Proposal:** |
Group is prepared, and brings good ideas | 5
**Code Review:** | 
GitHub Tag Used | 1
Assignment fulfills minimum viable product | 2
Assignment has clean, organized output | 2
Assignment has sensible arguments, default behaviour | 3
**Final Submission:** | 
Research and References | 5
Code is well documented | 5
Appropriate Code Commits and Use of GitHub | 2

### Individual

Criteria | Points
---------|--------
Code Review Participation | 5
Contributed Commits | 10
Post Mortem | 10 
