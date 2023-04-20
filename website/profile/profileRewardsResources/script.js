"use strict";

/////////////////////////////////CLASSES///////////////////////////////////////

class Rewards {
  constructor(pointValue) {
    this.pointValue = pointValue;
  }
}

//////////////////////////GLOBAL VARIABLES/////////////////////////////////////

// On screen Buttons
const editBtn = document.querySelector(".editButton");
const submitBtn = document.querySelector(".submit");
const closeBtn = document.querySelectorAll(".close");

// Pop-up stuff
const formBox = document.querySelector(".updateInformation");
const overlay = document.querySelector(".overlay");
const description = document.querySelector(".description");
const birthdayMes = document.querySelector(".birthdayMessage");

// Input and label values
const nameInput = document.querySelector(".nameInput");
const jobInput = document.querySelector(".jobInput");
const dobInput = document.querySelector(".dobInput");
const nameVal = document.querySelector(".name");
const jobVal = document.querySelector(".job");
const dobVal = document.querySelector(".DOB");
const ageLabel = document.querySelector(".ageHere");
const avatar = document.querySelector(".avatar");
let inputFile;

// Trophy table data
const table = document.querySelector(".trophyTable");
const tableData = document.getElementsByTagName("td");

// getting current time when date is called
const date = new Date();

///////////////////////////////FUNCTIONS///////////////////////////////////////

// Get trophy description
const changeDescription = (index) => {
  let returnStr;

  // check which index is being accessed and change description based off of trophy
  switch (index) {
    case 0:
      returnStr = `You completed your first task! Great Job!`;
      break;
    case 1:
      returnStr = `You're getting more done! Nice!`;
      break;
    case 2:
      returnStr = `That's a lot of tasks!`;
      break;
    case 3:
      returnStr = `Holy cow! You're doing great!`;
      break;
    case 4:
      returnStr = `AMAZING! You're not getting anymore trophies after this though`;
      break;
    default:
      returnStr = `HOW DID THIS HAPPEN!`;
      break;
  }

  return returnStr;
};

const changeTrophyName = (index) => {
  let returnStr;

  switch (index) {
    case 0:
      returnStr = `1 Point`;
      break;
    case 1:
      returnStr = `10 Points`;
      break;
    case 2:
      returnStr = `25 Points`;
      break;
    case 3:
      returnStr = `50 Points`;
      break;
    case 4:
      returnStr = `100 Points`;
      break;
    default:
      returnStr = `HOW DID THIS HAPPEN!`;
      break;
  }

  return returnStr;
};

// Create Reward table
const createTable = () => {
  // declare variables
  let userRewards = new Rewards(120);
  let index, tdIndex, tableDataHTML, row, cell, divClassHTML, loopCount;
  let rowIndex = 0,
    cellIndex = 0;
  let points = [1, 10, 25, 50, 100];
  let description, trophyName;

  // empty table contents
  table.innerHTML = "";

  // create first row
  row = table.insertRow(rowIndex);

  // Loop through different types of points
  for (index = 0; index < points.length; index++) {
    // check which points value user score goes to
    if (
      userRewards.pointValue >= points[index] &&
      userRewards.pointValue <= points[index + 1]
    ) {
      //set loopCount to index
      loopCount = index + 1;
      console.log(loopCount);

      // otherwise, check if user has 100 or more points
    } else if (userRewards.pointValue >= 100) {
      // set the loop count to length of points array
      loopCount = points.length;
    }
  }

  // loop until # of awards user has is hit
  for (index = loopCount; index > 0; index--) {
    // Get Trophy Description and name
    description = changeDescription(index - 1);
    trophyName = changeTrophyName(index - 1);

    // table data HTML code to be inserted
    tableDataHTML = `
    <td>
      <img
        class="trophy"
        src="profileRewardsResources/trophies/${
          points[(index - 1) % points.length]
        }pt.png"
      />
    </td>
    <div class="description description--${index - 1} hidden">
      <img
        class="trophy"
        src="profileRewardsResources/trophies/${
          points[(index - 1) % points.length]
        }pt.png"
      />
      <h3>${trophyName}</h3>
      <h3>${description}</h3>
    </div>
    `;

    // insert the HTML after the table data
    table.insertAdjacentHTML("afterbegin", tableDataHTML);
  }
};

const isBirthday = (dateOfBirth, date) => {
  let currentDay, currentMonth, currentYear;
  let birthDate, birthMonth, birthYear, age;

  // Get current day
  currentDay = date.getDate();

  // Get curreny month - Addition because method is zero based
  currentMonth = date.getMonth() + 1;

  // Get current year
  currentYear = date.getFullYear();

  // get input day
  birthDate = Number(dateOfBirth.slice(-2));

  // get input month
  birthMonth = Number(dateOfBirth.slice(5, 7));

  // get input year
  birthYear = Number(dateOfBirth.slice(0, 4));

  // get age
  age = currentYear - birthYear;

  // check if today is user birthday
  if (currentDay === birthDate && currentMonth === birthMonth) {
    ageLabel.textContent = `You're ${age} years old!`;
    overlay.classList.remove("hidden");
    birthdayMes.classList.remove("hidden");
    return true;
  } else {
    return false;
  }
};

// create rewards table
createTable();

// NEEDS TO BE BELOW CREATE TABLE CALL TO WORK PROPERLY
// Closes any popup open
const closePopup = () => {
  overlay.classList.add("hidden");
  formBox.classList.add("hidden");
  birthdayMes.classList.add("hidden");
  description.classList.add("hidden");
};

/////////////////////////////ON SCREEN EVENTS//////////////////////////////////

// Shows box for profile information
editBtn.addEventListener("click", (event) => {
  // Stop page from refreshing on press
  event.preventDefault();

  // set Labels and input fields
  nameVal.textContent = "Name:";
  jobVal.textContent = "Occupation:";
  dobVal.textContent = "Date of Birth:";
  nameInput.value = "Name: ";
  jobInput.value = "Occupation: ";
  dobInput.value = "Date of Birth: ";

  // show form box
  formBox.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// Empties input field when clicked
nameInput.addEventListener("click", () => {
  nameInput.value = "";
});

// Empties input field when clicked
jobInput.addEventListener("click", (event) => {
  jobInput.value = "";
});

// Fills out profile information with form information
submitBtn.addEventListener("click", (event) => {
  // stop page from refreshing on button press
  event.preventDefault();

  // Update website information
  nameInput.value === "Name: "
    ? ""
    : (nameVal.textContent += ` ${nameInput.value}`);
  jobInput.value === "Occupation: "
    ? ""
    : (jobVal.textContent += ` ${jobInput.value}`);
  dobInput.value === "Date of Birth: "
    ? ""
    : (dobVal.textContent += ` ${dobInput.value}`);

  // close form box
  formBox.classList.add("hidden");
  overlay.classList.add("hidden");

  // check if today is birthday
  isBirthday(dobInput.value, date);
});

// pulls up description of trophy
for (let index = 0; index < tableData.length; index++) {
  // get each trophy descriptor
  let indexClass = document.querySelector(`.description--${index}`);
  tableData[index].addEventListener("click", (event) => {
    // show actual trophy description
    overlay.classList.remove("hidden");
    indexClass.classList.remove("hidden");
  });

  // close description box and blur when blur is click
  overlay.addEventListener("click", (event) => {
    overlay.classList.add("hidden");
    indexClass.classList.add("hidden");
  });
}

// close description box/form box and blur when blur is click
overlay.addEventListener("click", (event) => {
  // Stops page from refreshing on click
  event.preventDefault();
  closePopup();
});

// Close Pop up using X button
for (let index = 0; index < closeBtn.length; index++) {
  closeBtn[index].addEventListener("click", closePopup);
}
