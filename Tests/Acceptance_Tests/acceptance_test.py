import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager

# a function to add a new to-do list item
def add_to_do(item_text, priority_id):

    time.sleep(2)
    add_task = driver.find_element("id", "dropDown")
    add_task.click()

    time.sleep(2)
    add_task = driver.find_element("id", "input")
    add_task.send_keys(item_text)

    time.sleep(2)
    add_priority = driver.find_element("id", priority_id)
    add_priority.click()

    time.sleep(2)
    confirm_task = driver.find_elements(By.CLASS_NAME, "add")
    confirm_task[1].click()

def complete_task():
    time.sleep(2)
    complete = driver.find_elements(By.CLASS_NAME, "complete")
    complete[0].click()

def scroll_down():
    html = driver.find_element(By.TAG_NAME, 'html')
    html.send_keys(Keys.DOWN)
    html.send_keys(Keys.DOWN)
    html.send_keys(Keys.DOWN)

# initialize driver
options = Options()
options.add_experimental_option("detach", True)
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# open the webpage and maximize
driver.get("http://www.sidequests.pro/")
time.sleep(2)
driver.maximize_window()

# fill out the login and submit
input_username = driver.find_element("id", "usernameID")
input_password = driver.find_element("id", "passwordID")
input_submit = driver.find_element("id", "login")

input_username.send_keys("test2")
input_password.send_keys("2")
time.sleep(2)
input_submit.click()

# scroll down
scroll_down()

# add 3 items to the to-do list
add_to_do("Write Acceptance Tests", "priotity2")
add_to_do("Conduct Interviews", "priotity3")
add_to_do("Turn In D7", "priotity1")

# scroll down
scroll_down()
scroll_down()

# mark off the tasks as completed
complete_task()
complete_task()
complete_task()










    




