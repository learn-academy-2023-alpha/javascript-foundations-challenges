# Javascript Foundations Challenges

This repository holds the JavaScript foundations pair programming challenges for the 2023 Alpha cohort.

### Process Notes
- Anything wrapped in `< >` is an indication that this will be named uniquely, the `< >` are NOT actually added to the command
- `$` is an indication of a command line prompt, the `$` is not included
- Anything in `( )` is informational and not included in the command
- The term local/locally means on your personal computer
- The term remote means on GitHub


### Naming Conventions
Branches and file names should be in all lowercase letters:
- Branch name: `topic-initials1-initials2` (ex. arrays-em-nr)
- File name: `topic-student1-student2.js` (ex. arrays-elyse-nicole.js)


### Informational Commands
Use this informational command to tell you what files have been modified and what phase of the git process you are on:  
- $ `git status`  

Use this informational command to see what branch you are currently on:  
- $ `git branch`


### Cloning the Repo
Use this command if you don't have the repository (folder) on your local machine:   
- $ `git clone <repo-url>` (pasted from clipboard on GitHub)


### Create a Branch
Use this command if you need to create a branch that does not exist anywhere:  
- $ `git checkout -b <topic-initials1-initials2>` (ex. arrays-em-nr)


### Changing to an Existing Local Branch
Use this informational command to see what branches exist on your local machine:  
- $ `git branch`

Use this command to move to a branch that exist on your local machine:  
- $ `git checkout <branch-name>`


### Changing to a Branch that Existing on GitHub
Use these commands if the repo you are working on has a branch but it is NOT on your local machine:  
- $ `git fetch origin <branch-name>`
- $ `git checkout <branch-name>`


### Pushing Local Code to GitHub
Use these commands to add the code you have on your local machine to GitHub:
- $ `pwd` (ensure you are in the repository level)
- $ `git status` (informational command, ensure you are on the correct branch and in the correct directory)
- $ `git add <file-name>`
- $ `git commit -m "message describing the work that was accomplished"`
- $ `git push origin <branch-name>`


### Pulling Remote Code to Local
Use this command if you DO have the repository on your local machine but DON'T have the latest version of the code from GitHub:  
- $ `git pull origin <branch-name>`


### Deleting a Branch on GitHub
Branches exist on your local and on the remote. Always delete your branch in both places.
- Branches in GitHub can be deleted via the GUI


### Deleting a Branch on Local
Branches exist on your local and on the remote. Always delete your branch in both places.
- $ `git checkout main`
- $ `git pull origin main`
- $ `git branch -d <branch-name>`
