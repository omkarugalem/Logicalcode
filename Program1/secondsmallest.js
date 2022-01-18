let arr = [44, 79, 95, 80, 45, 17, 95, 96];
let assc = [];

arr.sort((a, b) => b - a);
console.log(arr);
for (let k = arr.length - 2; k >= 0; k--) {
  if (arr[k] != arr[arr.length - 1]) {
    console.log("second smallest number is ", arr[k]);
    break;
  }
}
