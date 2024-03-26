// Використовуючи alert та prompt створити пешу програму за таким функціоналом:

// Привітатись з юзером - "Hello!";
// Спитати імя - "What is your name?";
// Спитати з якої він країни - "Where are you from?";
// Вивести на екран - "Nice to meet you, {name}! You are from {country}!"

alert('Hello!');
const yourName = prompt('What is your name?', '');
const country = prompt('Where are you from?', '');
const result = `Nice to meet you, ${yourName}! You are from ${country}!`;

const div = document.querySelector('div');
div.innerText = result;