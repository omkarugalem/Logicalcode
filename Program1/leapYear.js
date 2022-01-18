function checkLeapYear(year) {

  if (year % 4 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}
const year = prompt("Enter a year:");

checkLeapYear(year);
