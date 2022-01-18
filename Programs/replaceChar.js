// replace one character with another character

function replaceChar(str, a, b) {
  var newstr = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] == a) {
      newstr.push(b);
    } else {
      newstr.push(str[i]);
    }
  }
  console.log(newstr.join(""));
}
replaceChar("Hi omkar ", "r", "a");
