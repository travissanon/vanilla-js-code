// Parent Class
function CreatePerson(name, age) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.age = age;

  return newUser;
}

const userFunctions = {
  greet: function () {
    console.log("hello");
  },
};

const person1 = new CreatePerson("Jeff", 22);

console.log("-----class CreatePerson-----");

console.log("Name and Age:", {
  name: person1.name,
  age: person1.age,
});

person1.greet();

// Sub class
function AdminPerson(name, age, rank) {
  const newAdminPerson = CreatePerson(name, age);

  Object.setPrototypeOf(newAdminPerson, adminUserFunctions);
  newAdminPerson.rank = rank;

  return newAdminPerson;
}

const adminUserFunctions = {
  increaseRank: function () {
    this.rank += 1;
    console.log("New Rank:", this.rank);
  },
};

Object.setPrototypeOf(adminUserFunctions, userFunctions);

const admin1 = new AdminPerson("Patrick", 29, 1);

console.log("-----class AdminPerson-----");

console.log("Name and Age:", {
  name: admin1.name,
  age: admin1.age,
});

console.log("Current Rank:", admin1.rank);

admin1.increaseRank();

admin1.greet();
