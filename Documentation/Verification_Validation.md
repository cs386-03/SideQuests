# Deliverable 7 - Project Verification and Validation

## 1. Description
SideQuests is an online website allowing users to form a to-do list of tasks they must complete. As users add tasks to the to-do list they get to choose the priority level of their task and the due date of the task. From here a priority 1 task will earn the user 3 points on completion and the priority 3 will net 1 point for the user. The user can collect points and earn trophies to show off how productive they have been in completing tasks.   

From here, the user can go to their profile page to view the rewards they have earned based on the task they completed. These rewards will appear on the user's bookshelf of all the rewards. The goal of this website is to help users say organized and on track to complete all tasks they have in life with a fun twist. Users will have a reward-based system for keeping their life on track. 

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

### Script
**Tasks:**
- Create a username and password
- Log in wiht your username and password
- Add 5 unique to-do list items
- Find the item(s) with the earliest due date
- Find the item(s) with the highest priority
- Mark a task as complete
- Delete a task
- Find what today's date is
- Find how many tasks you completed
- Find how many points you have earned
- Set up your profile

**Questions:**
- What visually stood out to you on the site?
- Is there anything that can be improved to make it more visually appealing?
- Was the system easy to navigate?
- Is there anything that was confusing at first?
- Do the rewards provide incentive?
- How could it feel more rewarding?
- Does the website feel usable for multiple areas of your life to plan?
- Did the trophies feel like a good reward to strive to get?
- Does seeing how many tasks you started and finished encourage you to finish more?

### Interview Results
**Lucy Girod**
- What visually stood out to you on the site?
    - I like clicking through the calendar.
- Is there anything that can be improved to make it more visually appealing?
    - A lot more color and images, I am a very visual person and it is visually lacking for my brain.
- Was the system easy to navigate?
    - Yeah, well enough.
- Is there anything that was confusing at first?
    - Yes, I am confused about the check mark and delete option for the tasks, they look like they do the same thing.
- Do the rewards provide incentive?
    - Not for me since I am not that kind of person, but it can.
- How could it feel more rewarding?
    - Rewards that look prettier with better colors.
- Does the website feel usable for multiple areas of your life to plan?
    - Yeah it does.
- Did the trophies feel like a good reward to strive to get?
    - Again, not for me, I am not motivated in that way.
- Does seeing how many tasks you started and finished encourage you to finish more?
    - Somewhat, I would get rid of the "tasks started" since it seems too cluttered and the points at the bottom feel irrelevant because of the amount of text.

### Reflections
**Lucy:**  
The interview with Lucy made us realize that this website may not work for everyone. Not everyone is motivated through positive reinforcement and it may not click for certain people. She states that it gets the job done, but she was very turned off by the color choices as not much stood out to her visually. With this in mind, the website could probably have a bigger variety in colors in general to better pop out to users or we could implement options to change the colors of the webpage. In addition, she was a bit confused on the buttons and their functionality for the to-do list, being confused on what the complete and delete options for each task, not realizing that the complete button gets rid of the task and adds points. Overall, we could have spent a bit more time deciding design choices and made items a bit more clear on what they do.

**Summary:**  
