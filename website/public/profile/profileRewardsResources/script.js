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
const userPoints = localStorage.getItem("points");
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
      returnStr = `That sure is a lot of stuff you've been doing. Keep it up!`;
      break;
    case 5:
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
      returnStr = `75 Points`;
      break;
    case 5:
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
  let userRewards = new Rewards(userPoints);
  let index, tdIndex, tableDataHTML, row, cell, divClassHTML, loopCount;
  let rowIndex = 0,
    cellIndex = 0;
  let points = [1, 10, 25, 50, 75, 100];
  let description, trophyName;

  localStorage.setItem("morePoints", userPoints)

  // empty table contents
  table.innerHTML = "";

  // create first row
  row = table.insertRow(rowIndex);

  // loop through points array
  for (index = 0; index < points.length; index++) {
    // check how many points user has compared to point goals
    if (
      userRewards.pointValue >= points[index] &&
      userRewards.pointValue <= points[index + 1]
    ) {
      // set loop count according to points
      loopCount = index + 1;
    }
    // otherwise check if user has atleast 100 points
    else if (userRewards.pointValue >= 100) {
      // set loop count to point array length
      loopCount = points.length;
    }
  }

  // Loop through different types of points
  for (index = 1; index < loopCount + 1; index++) {
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
  `;

    // insert a new cell in the data
    cell = row.insertCell(cellIndex);

    // set the cell data
    cell.innerHTML = tableDataHTML;

    // increase cell index
    cellIndex++;

    // check when the 5th cell is found
    if (index % 2 === 0 && index !== 0) {
      // increase row index
      rowIndex++;

      // reset cell index value
      cellIndex = 0;

      // insert a new row into the table
      row = table.insertRow(rowIndex);
    }
  }

  // loop through all of the table data
  for (tdIndex = 0; tdIndex < tableData.length; tdIndex++) {
    // get description and name
    description = changeDescription(tdIndex);
    trophyName = changeTrophyName(tdIndex);

    // description modal HTML to be inserted
    divClassHTML = `
    <div class="description description--${tdIndex} hidden">
      <img
        class="trophy"
        src="profileRewardsResources/trophies/${
          points[tdIndex % points.length]
        }pt.png"
      />
      <h3>${trophyName}</h3>
      <h3>${description}</h3>
    </div>
    `;

    // insert the HTML after the table data
    tableData[tdIndex].insertAdjacentHTML("afterend", divClassHTML);
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
