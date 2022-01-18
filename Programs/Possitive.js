// positive number is multiple of 3 or multiple of 7

function checkMultiple(num) {
  if (num % 3 == 0 || num % 7 == 0) {
    return true;
  } else {
    return false;
  }
}
checkMultiple(12);
