// check if a value exists in an array

function elementExist(element) {
  var arr = [1, 9, 3, 8, 5, 7, 10];
  if (arr.indexOf(element) !== -1) {
    console.log("value Exist");
  } else {
    console.log("value does not exists");
  }
}
elementExist(5);