# Deliverable 7 - Project Verification and Validation

## 1. Decription
Sidequests are an online website allowing users to form a to-do list of tasks they must complete. As users add tasks to the to-do list they get to choose the priority level of their task and the due date of the task. From here a priority 1 task will earn the user 3 points on completion and the priority 3 will net 1 point for the user. The user will be able to collect points and earn trophies to show off how productive they have been in completing tasks.   

From Here the user can go to their profile page to view the rewards that they have earned based off of the task they have completed. These rewards will appear on the user's bookshelf of all the rewards. The goal of this website is to help users say organized and on track to complete all tasks they have in life with a fun twist. Users will have a reward-based system for keeping their life on track. 

## 2. Verification

### 2.1 Unit Test
**Test Framework:** For our unit tests, we used the framework Jest, which can be accessed [here](https://jestjs.io/docs/getting-started). \
**Tests Folder:** The folder containing the unit tests can be accessed [here](https://github.com/cs386-03/SideQuests/tree/main/Tests/Unit_Tests). \
**Example:** One example of a unit test containing a mock object is found [here](https://github.com/cs386-03/SideQuests/tree/main/Tests/Unit_Tests/isBirthday.test.js). It creates a mock object of the User class, which contains the user's birthday as an attribute of the user's birthday. It then tests a method that determines whether today is the user's birthday. \
**Print Screen:** \
![Test Results](D7_unit_tests.JPG)

### 2.2 Acceptance Test
**Test Framework:** For our acceptance tests, we used the fromework Selenium WebDriver, which can be accessed [here](https://www.selenium.dev/documentation/webdriver/). \
**Tests Folder:** The folder containing the acceptance tests can be accessed [here](https://github.com/cs386-03/SideQuests/tree/main/Tests/Acceptance_Tests). \
**Example:** One part of the interface that is tested is the ability for users to add items to the to-do list with a title and priority, and then mark them as complete. The user's total points and completed tasks are then displayed. The code for this test can be found [here](https://github.com/cs386-03/SideQuests/tree/main/Tests/Acceptance_Tests/acceptance_test.py). \
**Demo:** A recording of the automated test running can be downloaded [here](https://github.com/cs386-03/SideQuests/tree/main/Demos/acceptance_demo.mp4). \

## 3. Validation 
