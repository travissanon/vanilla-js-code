// Parent class
class CreatePerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new CreatePerson("Mike", 30);

console.log("-----class CreatePerson-----");

console.log("Name and Age:", {
  name: person1.name,
  age: person1.age,
});

person1.greet();

// Sub class
class AdminPerson extends CreatePerson {
  constructor(name, age, rank) {
    super(name, age);
    this.rank = rank;
  }

  increaseRank() {
    this.rank += 1;
    console.log("New Rank:", this.rank);
  }
}

const admin1 = new AdminPerson("Patrick", 29, 1);

console.log("-----class AdminPerson-----");

console.log("Name and Age:", {
  name: admin1.name,
  age: admin1.age,
});

console.log("Current Rank:", admin1.rank);

admin1.increaseRank();

admin1.greet();
