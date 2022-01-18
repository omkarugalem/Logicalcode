// prime No

function isPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) {
      return "Not A Prime Number";
    }
  return "It is a Prime Number";
}
console.log(isPrime(7));