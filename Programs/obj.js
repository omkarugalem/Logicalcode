// create one object with name & place and print that values only which place length should be greater than 5


var obj = [
  {
    name: "Omkar",
    place: "Mumbai",
  },
  {
    name: "Gagan",
    place: "Banglore",
  },
  {
    name: "Manisha",
    place: "Pune",
  },
];

var result = obj.filter((val, index) => {
  if (val.place.length > 5) {
    return val;
  }
});
console.log(result);