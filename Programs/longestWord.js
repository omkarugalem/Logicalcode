// longest word in a string

var longestString = function (str) {
  var newstr = str.split(" ");
  var longestWord = 0;
  for (var i = 0; i < newstr.length; i++) {
    if (newstr[i].length > longestWord) {
      longestWord = newstr[i].length;
    }
  }
  console.log(longestWord);
};
longestString("Hi I am omkar");