//  first letter of a string to uppercase


function capitalizeFirstLetter(str) {
  let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}
let string = prompt("Enter a string: ");
let result = capitalizeFirstLetter(string);
console.log(result);
