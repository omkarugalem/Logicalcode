let arr = [44, 79, 95, 80, 45, 17, 95, 45];
let assc = [];
for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
for (let k = arr.length - 2; k >= 0; k--) {
  if (arr[k] != arr[arr.length - 1]) {
    console.log("second largest number is ", arr[k]);
    return;
  }
}
console.log(arr[arr.length - 2]);
