module.exports = class User {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }

  isBirthday() {
    let currentDay, currentMonth, currentYear;
    let birthDate, birthMonth, birthYear, age;
    const date = new Date();
  
    // Get current day
    currentDay = date.getDate();
  
    // Get curreny month - Addition because method is zero based
    currentMonth = date.getMonth() + 1;
  
    // Get current year
    currentYear = date.getFullYear();
  
    // get input day
    birthDate = Number(this.dateOfBirth.slice(-2));
  
    // get input month
    birthMonth = Number(this.dateOfBirth.slice(5, 7));
  
    // get input year
    birthYear = Number(this.dateOfBirth.slice(0, 4));
  
    // get age
    age = currentYear - birthYear;
  
    // check if today is user birthday
    if (currentDay === birthDate && currentMonth === birthMonth) {
      return true;
    } else {
      return false;
    }
  }
}


