// remove duplicate from array

var arr = [1, 2, 8, 5, 5];
function remove(arr) {
  let uniqueArray = [];
  for (let i of arr) {
    if (uniqueArray.indexOf(i) === -1) {
      uniqueArray.push(i);
    }
  }
  console.log(uniqueArray);
}
remove(arr);
