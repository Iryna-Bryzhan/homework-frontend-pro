// const book = {
//   contacts: [
//     {
//       name: "Serhii",
//       phone: "+380999999999",
//       email: "example@email.com",
//     },
//   ],
//   find: function (name) {
//     for(const contact of this.contacts){
//         if(contact.name === name){
//         return contact
//       }
//     }
//     return null
//   },
//   add: function (contact) {
//     this.contacts.push(contact);
//   },
// };

// book.add({
//   name: "Victor",
//   phone: "+380999999999",
//   email: "example@email.com",
// });

// console.log(book.find("Victor"));


// ** Створіть функцію конструктор на базі якої будуть створені обʼєкти книг контактів

const contacts = [];

function Contact(name, phone, email) {
  this.name = name;
  this.phone = phone;
  this.email = email;
}

function Book() {
  this.contacts = [];
}

Book.prototype.find = function (name) {
  for (const contact of this.contacts) {
    if (contact.name === name) {
      return contact;
    }
  }
  return null;
};

Book.prototype.add = function (contact) {
  this.contacts.push(contact);
};

const mappedContacts = contacts.map((el) => {
  return new Contact(el);
});

const book = new Book();
const book2 = new Book();

const contact1 = new Contact("Victor", "+380686563002", "qwerty@gmail.com");
const contact2 = new Contact("Vika", "+380678565325", "qwerty1@gmail.com");
const contact3 = new Contact("Sveta", "+380686563002", "qwerty2@gmail.com");
const contact4 = new Contact("Sergii", "+380686565632", "qwerty3@gmail.com");

book.add(contact1);
book.add(contact2);
book.add(contact3);

book2.add(contact2);
book2.add(contact4);

console.log(book);
console.log(book2);

console.log(book.find("Victor"));
console.log(book.find("Sveta"));
