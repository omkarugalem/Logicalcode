// function rev(str) {
//   var newStr = "";
//   for (var i = str.length - 1; i >=0; i--) {
//     newStr = newStr + str[i];
//   }
//   console.log(newStr);
// }
// rev("omkar");

var str = "java";
var rev = "";
for (var i = str.length - 1; i >= 0; i--){
    rev+=str[i]
}
console.log(rev);