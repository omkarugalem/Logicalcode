function charCount(string) {
  var length = 0;
  while (string[length]) {
    length++;
  }
  return length;
}
document.write(charCount("omkar"));
