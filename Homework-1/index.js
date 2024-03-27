alert('Hello!');
const yourName = prompt('What is your name?', '');
const country = prompt('Where are you from?', '');
const result = `Nice to meet you, ${yourName}! You are from ${country}!`;

const div = document.querySelector('div');
div.innerText = result;