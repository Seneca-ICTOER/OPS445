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

## Process

This assignment will take some time to complete. Be sure to start early and identify obstacles as quickly as possible.

### Initial Meetup

- You will be assigned to a group. Meet with your group members, and arrange methods of communication (email, Teams, etc.)
- Begin discussing a topic for your assignment. **It is strongly recommended you have 2-3 ideas** in case your first choice isn't suitable.
- Every group member should verify that their **git** configuration is set to identify them using their **myseneca email**. Note: use `git config user.email` on each of your devices to verify this. 

### Proposal Meeting

These will be done either online or in-person, and it is expected that **all group members are attending and ready to contribute**.

- Provide your 2 - 3 topic ideas
- Be prepared to answer some questions:
    - How will your program gather required input?
    - How will your program accomplish its requirements? 
    - How will output be presented?
    - What arguments or options will be included?
    - What aspects of development do you think will present the most challenge?
    - When do you estimate you will complete each part of the task? Provide a rough timeline for planning, coding, testing, and documenting your assignment.

This meeting will be a dialogue, since there might be some changes or suggestions that come up during our initial meeting. 

Once you have gotten approval for your script, you will get access to your repository for development. **Include the description, overview and summary of the above questions** inside your repository's `README.md` file.

**Important**: You will receive an email from GitHub inviting you to collaborate on the group repository. **Accept the invite ASAP because it will expire after a couple of days**. I will deduct marks if I have to re-add you to the repository.

### Contributing to the Assignment

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

#### Pull Requests

When group members finish a feature that will become part of the assignment, they will need to open a _pull request_. 

- From GitHub, select the 'main' branch. You will see a message that your branch is 'X commits ahead of main' and an option to 'Open a Pull Request'. Click that. 
- Describe your changes. You will now need approval from 1-2 members of the group to approve your pull request.

I have prepared a [short video](https://youtu.be/u_WPSQ655LA) that demonstrates this entire process.

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

- The assignment should be running on Matrix, MyVMLab, or one of your Linux VMs.
- Students can demonstrate what the assignment does, and why it's useful. 
- Demonstrate additional options and arguments. Please also note what
  configuration changes were needed (if any)
- Use `git status` and `git log` in the repository directory.
- I will ask you specific questions about how your code works. If you wrote the
  code, you will be required to explain.
- Code that cannot be explained will **result in a penalty for the entire group**.

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
Script is demonstrated | 2
Authors can explain their code | 8
**Final Submission:** | 
Assignment is relevant, useful, and shows ambition | 2
Assignment has clean, organized output | 1
Assignment executes without error | 2
Code is well documented | 5
Appropriate Code Commits and Use of GitHub | 5

### Individual

Criteria | Points
---------|--------
Contributed Commits | 10
Post Mortem | 10 
