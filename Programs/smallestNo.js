function lowest(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log("Lowest Value is", min);
}
lowest([4, 3, 6, 9]);
