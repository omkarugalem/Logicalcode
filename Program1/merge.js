let person = {
  name: "div",
  age: 21,
  sal: 25000,
};
let emp = {
  gender: "female",
};

let merge = { ...person, ...emp };
console.log(merge);
