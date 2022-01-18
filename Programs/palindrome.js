var str = "racecar";
function Palindrome(string) {
  var length = str.length;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return "no";
    }
  }
  return "yes";
}
var a = Palindrome(str);
console.log(a);
