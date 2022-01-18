function fact(n) {
  var fact;
  if (fact == 0 || fact == 1) {
    fact = 1;
  }
  for (var i = n - 1; i > 1; i--) {
    fact = n * i;
  }
  return fact;
}
document.write(fact(3));
