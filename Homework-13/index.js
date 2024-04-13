const message = prompt("Enter yor strinng");
const chars = prompt("Enter some chars for removing");
if (!message || (chars && !message)) {
  alert("Ви не ввели повідомлення! Спробуйте ще раз");
}

function deletChars(message, chars) {
  const charsArr = chars.split("");

  charsArr.forEach((element) => {
    message = message.split(element).join("");
  });

  return message;
}
const result = deletChars(message, chars);

if (message) {
  alert(result);
}
