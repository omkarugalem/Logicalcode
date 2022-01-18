var obj = [
  {
    name: "omkar",
  },
  {
    name: "mani",
  },
];

// var res = (obj[1].name = "vishal");
// console.log(res);

var x = obj.filter((val, index) => {
  if (val.name == "mani") {
    return val;
  }
});
console.log(x);


