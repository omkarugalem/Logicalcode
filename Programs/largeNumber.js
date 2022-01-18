function greatestVal(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log("largest value is", max);
}
greatestVal([5,4,2,8]);
