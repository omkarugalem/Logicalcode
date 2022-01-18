// function largest(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   console.log(max);
// }
// largest([15, 37, 8, 9, 3]);

function large(arr) {
  for (var j = 1; j < arr.length; j++) {
    if (arr[j - 1] !== arr[j]) {
      return arr[j];
    }
  }
}
let a = large([12, 9, 8, 5]);
console.log(a);
