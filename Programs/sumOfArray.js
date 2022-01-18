// find the sum of an array of numbers

function arraySum(arr) {
  var sum = 0;
  for (let value of arr) {
    sum += value;
  }
  console.log(sum);
}
arraySum([3,5,2]);