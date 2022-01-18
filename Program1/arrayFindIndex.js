function isEven(element) {
  return element % 2 == 0;
}

let randomArray = [1, 45, 8, 98, 7];

firstEven = randomArray.findIndex(isEven);
console.log(firstEven);
firstOdd = randomArray.findIndex(element => element % 2 == 1);
console.log(firstOdd);
