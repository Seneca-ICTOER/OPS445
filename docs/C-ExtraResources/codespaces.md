---
id: codespaces
title: Using Codespaces
sidebar_position: 4
description: Using GitHub Codespaces for Assessments
---

## Codespaces Introduction

GitHube Codespaces allows us to run a limited Linux container in the Cloud. You will have a **VS Code-like environment** in your browser, with a Python Debugger, working terminal, and so on.

## Starting the Codespace

- Use the link given to you by your instructor. You will be asked to **Accept the assignment**, same as your labs.
- Instead of **Cloning** your repo, click on the **black button** that says **Open As Codespace**.

![Open As Codespace](/img/codespaces-button.png "Example of black button that will open a Codespace")

- You should see a loading screen. Please wait and allow the Codespace to launch.

![Loading Codespace](/img/codespaces-loading.png "The codespaces is loading")

If your Codespaces fails to load, please see the section **Starting a Codespace Manually** below.

## Committing Your Changes

Your assessment repo should be auto-committing your changes as you go. No saving or committing should be necessary. You can verify this by checking the **Source Control** icon on the left side of your Codespace window:

![Source Control Empty](/img/nothing-to-commit.png "There is nothing to commit")

If you see a number, please be patient and wait for about a minute. The number should disappear on its own. 

![Source Control Change](/img/something-to-commit.png "There is something to commit")

If the number doesn't disappear, please see the section **Committing Manually** below.

## Starting A Codespace Manually

If the codespace doesn't start when you click the "Open As Codespace" button, you can start it manually from the repository landing page.

- Find the green **Code** button on the repository landing page. It is the same button you use for cloning.
- Click the tab that says **Codespaces**.
- Click the plus sign to start a new codespace.

![Start a codespace](/img/start-codespace.png "Starting a new codespace")

- If you get a message about the page being, blocked, refresh the repository landing page.
- Click the green **Code** button again. You will see an active codespace with a randomly generated name. Click on it to launch the codespace.

![Running Codespaces](/img/enter-running-codespace.png "Enter a running codespace")

## Committing Manually

If you see a number next to the **Source Control** icon that doesn't go away, you can make a manual commit.

- Click on Source Control icon. You will see a list of uncommitted files. **If your Python script is not in this list, then no further commits are necessary and you can stop reading**.

![Source Control File List](/img/enter-commit-message.png "a list of uncommitted files")

- If you **do** see your Python script in this list (for example, `script.py` in the screenshot above), then click on the plus sign **+** next to the file.
- **Enter a commit message in the text box**. For example: "finished quiz". **If you do not enter a commit message, the next step will not work**.
- **Click the Commit button**. If a dialog box appears, accept the default value and continue.
- You will now need to push. Click the button **with three dots**. Find the option to **Push**.
- If you encounter an error, notify your instructor immediately.

![Pushing Code](/img/push.png "Doing a manual push")
