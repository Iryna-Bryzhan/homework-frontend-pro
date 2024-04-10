while (true) {
  const number = Number(prompt("Введіть будь-яке число"));

  if (!number) {
    alert("Щось невірно! Перезавантаж сторінку");
  }

  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    alert(`${number} є простим числом.`);
  } else {
    alert(`${number} не є простим числом.`);
  }

  const again = confirm("Хочете перевірити ще одне число?");
  if (!again) {
    break;
  }
}
