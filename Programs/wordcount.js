// word count

function wordCounter(str) {
  var count = 1;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      count++;
    }
  }
  console.log(count);
}

wordCounter("Hi this is omkar ugale");
