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


**Daniel Bihnam**
- What visually stood out to you on the site?
    - I like the way the trophies hover and float.
- Is there anything that can be improved to make it more visually appealing?
    - I would like the site to have more color. It seems a little monotone and could have a pop of color.
- Was the system easy to navigate?
    - Yes the system was easy to navigate and was well labeled.
- Is there anything that was confusing at first?
    - The login vs sign up option was a little unclear at the beginning but was not too hard to understand.
- Do the rewards provide incentive?
    - I think the trophies are very cool but I feel like there isnt that much too them.
- How could it feel more rewarding?
    - If there were more ways to earn trophies it would be more rewarding.
- Does the website feel usable for multiple areas of your life to plan?
    - Yes the website feels versatile and usable for a lot of different areas of life.
- Did the trophies feel like a good reward to strive to get?
    - Yes the trophies are a good reward and are satisfying to earn.
- Does seeing how many tasks you started and finished encourage you to finish more?
    - Yes, trying to keep the number of completed tasks in line with the number of started tasks is good ecouragement to keep completing the tasks.


**Logan Gerard Wilson**
- What visually stood out to you on the site?
    - The dark mode color scheme was nice and the trophies look nice.
- Is there anything that can be improved to make it more visually appealing?
    - The site could have more color variety to it.
- Was the system easy to navigate?
    - Yes the system made sense and wasnt difficult to navigate
- Is there anything that was confusing at first?
    - The button to fill out the profile was not super obvious at first but it wasn't too hard to find.
- Do the rewards provide incentive?
    - The trophies are good but it could be more incentivising.
- How could it feel more rewarding?
    - The site could show how many more points you need for the next trophy so you can see yourself getting closer and closer to the next one.
- Does the website feel usable for multiple areas of your life to plan?
    - Yes the website could be used for school or day to day house tasks so it's versatile.
- Did the trophies feel like a good reward to strive to get?
    - Yes the trophies looked nice and it was cool to get nicer and nicer ones but I wish there were more ways to earn them.
- Does seeing how many tasks you started and finished encourage you to finish more?
    - Yes it helped to want to complete the tasks that I started.

### Reflections
**Lucy:**  
The interview with Lucy made us realize that this website may not work for everyone. Not everyone is motivated through positive reinforcement and it may not click for certain people. She states that it gets the job done, but she was very turned off by the color choices as not much stood out to her visually. With this in mind, the website could probably have a bigger variety in colors in general to better pop out to users or we could implement options to change the colors of the webpage. In addition, she was a bit confused on the buttons and their functionality for the to-do list, being confused on what the complete and delete options for each task, not realizing that the complete button gets rid of the task and adds points. Overall, we could have spent a bit more time deciding design choices and made items a bit more clear on what they do.

**Daniel:**  
The interview with Daniel let us have a lot of insight to the user experience. The rewards system seems to be on the right track when starting out but it seems that there could be more to it. He thinks that the rewards could come from more than just the points and there should be more ways to earn rewards. He also thinks that the color scheme of the website could have more variety. This was a common theme through most of the interviews, so it seems that in the future the website could be updated to have more color options or themes. The website in general serves a good purpose and Daniel can see it being useful for planning out his daily tasks in different areas of life. Overall the functionality of the website seems to be in a good place but the design could be more appealing.

**Logan:**  
The interview with Logan helped us gain a better understanding of the pros and cons of our website. Much of Logan's opinions alligned with the other interviews and helped us realize what we can do to improve. He liked the dark mode scheme of the website, but also agreed that it is a little monotone and could use some variety that is still along the dark mode theme. He thinks the site was easy to use and labeled well. Logan thought that the trophies could also use a little bit more to them. He suggested that the website could show how many points until the next trophy to encourage the user to keep getting points to get closer and closer to the next reward. Overall Logan thought the website's functionality was good but the rewards could be more interconnected to the user experience.


**Summary:**    
