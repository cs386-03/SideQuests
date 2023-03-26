function isBirthday(dateOfBirth, date){
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
      console.log("Happy Birthday!");
      
      return true;
    } else {
      return false;
    }
  }

module.exports = isBirthday;