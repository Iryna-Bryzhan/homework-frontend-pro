let numberUser = prompt("Введіть тризначне число", "");

if (
  numberUser.length > 3 ||
  numberUser.length === 0 ||
  numberUser.length < 3 ||
  isNaN(numberUser)
) {
  alert("Щось пішло не так! Перезавантаж сторінку");
} else {
  let number1 = numberUser[0];
  let number2 = numberUser[1];
  let number3 = numberUser[2];

  if (number1 === number2 && number2 === number3 && number1 === number3) {
    console.log(true, "Всі числа однакові");
  } else if (
    number1 === number2 ||
    number2 === number3 ||
    number1 === number3
  ) {
    console.log(true, "Є два однакових числа");
  } else {
    console.log(false, "Всі числа різні");
  }
}
