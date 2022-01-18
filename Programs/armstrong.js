// Armstrong No 

let sum = 0;
const number = prompt("Enter a three-digit positive integer: ");


let temp = number;
while (temp > 0) {

  let remainder = temp % 10;

  sum += remainder * remainder * remainder;

  temp = parseInt(temp / 10); 
}

if (sum == number) {
  console.log( "is an Armstrong number");
} else {
  console.log(" is not an Armstrong number");
}
