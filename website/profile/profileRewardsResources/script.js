"use strict";

const editBtn = document.querySelector(".editButton");
const submitBtn = document.querySelector(".submit");
const formBox = document.querySelector(".updateInformation");
const overlay = document.querySelector(".overlay");

const nameInput = document.querySelector(".nameInput");
const jobInput = document.querySelector(".jobInput");
const dobInput = document.querySelector(".dobInput");
const nameVal = document.querySelector(".name");
const jobVal = document.querySelector(".job");
const dobVal = document.querySelector(".DOB");

// Shows box for profile information
editBtn.addEventListener("click", (event) => {
  event.preventDefault();
  nameVal.textContent = "Name:";
  jobVal.textContent = "Occupation:";
  dobVal.textContent = "Date of Birth:";
  nameInput.value = "Name: ";
  jobInput.value = "Occupation:";
  dobInput.value = "Date of Birth:";

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

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(nameInput.value);
  nameVal.textContent += ` ${nameInput.value}`;
  jobVal.textContent += ` ${jobInput.value}`;
  dobVal.textContent += ` ${dobInput.value}`;

  formBox.classList.add("hidden");
  overlay.classList.add("hidden");
});
