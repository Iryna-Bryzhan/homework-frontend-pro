// const user = {
//   name: "Ivan",
//   surname: "Petrov",
//   age: 35,
//   location: "Kyiv",

//   getInfo: function() {
//     console.log(`Name: ${this.name}`);
//     console.log(`Surname: ${this.surname}`);
//     console.log(`Age: ${this.age}`);
//     console.log(`Location: ${this.location}`);
//   }
// };

// user.getInfo();



// ** Створіть функцію конструктор на базі якої будуть створені обʼєкти користувачів

function User(name, surname, age, location) {
  this.name = name,
  this.surname = surname,
  this.age = age,
  this.location = location;
}

User.prototype.getInfo = function () {
  console.log(`Name: ${this.name}`);
  console.log(`Surname: ${this.surname}`);
  console.log(`Age: ${this.age}`);
  console.log(`Location: ${this.location}`);
};

const user1 = new User("Nikita", "Joo", 30, "Kyiv");
const user2 = new User("Mary", "Ivanova", 25, "Lviv");

user1.getInfo();
user2.getInfo();
