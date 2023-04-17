"use strict";

/////////////////////////////////CLASSES///////////////////////////////////////

class Rewards {
  constructor(value, amount) {
    this.value = value;
    this.amount = amount;
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

// Create Reward table
const createTable = () => {
  // declare variables
  let userRewards = new Rewards(10, 7);
  let index, tdIndex, tableDataHTML, row, cell, divClassHTML;
  let rowIndex = 0,
    cellIndex = 0;
  let points = [1, 10, 25, 50, 100];

  // empty table contents
  table.innerHTML = "";

  // create first row
  row = table.insertRow(rowIndex);

  // loop until # of awards user has is hit
  for (index = 1; index < userRewards.amount + 1; index++) {
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
    if (index % 5 === 0 && index !== 0) {
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
    // description modal HTML to be inserted
    divClassHTML = `
    <div class="description description--${tdIndex} hidden">
      <img
        class="trophy"
        src="profileRewardsResources/trophies/${
          points[tdIndex % points.length]
        }pt.png"
      />
      <h3>Trophy ${tdIndex + 1} Name</h3>
      <h3>Trophy Description</h3>
      <h4>Acquisition Events</h4>
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

// close description/form box and blur when escape key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePopup();
  }
});

// Close Pop up using X button
for (let index = 0; index < closeBtn.length; index++) {
  closeBtn[index].addEventListener("click", closePopup);
}
