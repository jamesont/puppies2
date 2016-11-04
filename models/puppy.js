var id = 1;
var puppiesArray = [];
// console.log(puppiesArray);

function Puppy(name, age) {
  this.name = name;
  this.age = age;
  this.id = id;
  id += 1
};


module.exports = {
  puppiesArray,
  Puppy,
  id
};
