let num = 10;
let num1 = 0;
let num2 = 1;
let nextNo;
nextNo = num1 + num2;
while (nextNo <= num) {
  console.log(nextNo);
  num1 = num2;
  num2 = nextNo;
  nextNo = num1 + num2;
}
