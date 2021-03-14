// Parent class
function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
}

CreatePerson.prototype.greet = function () {
  console.log("hello");
};

const person1 = new CreatePerson("Mike", 30);

console.log("-----class CreatePerson-----");

console.log("Name and Age:", {
  name: person1.name,
  age: person1.age,
});

person1.greet();

// Sub class
function AdminPerson(name, age, rank) {
  CreatePerson.call(this, name, age);
  this.rank = rank;
}

AdminPerson.prototype.increaseRank = function () {
  this.rank += 1;
  console.log("New Rank:", this.rank);
};

AdminPerson.prototype = Object.create(CreatePerson.prototype);

AdminPerson.prototype.increaseRank = function () {
  this.rank += 1;
  console.log("New Rank:", this.rank);
};

const admin1 = new AdminPerson("Patrick", 29, 1);

console.log("-----class AdminPerson-----");

console.log("Name and Age:", {
  name: admin1.name,
  age: admin1.age,
});

console.log("Current Rank:", admin1.rank);

admin1.increaseRank();

admin1.greet();
