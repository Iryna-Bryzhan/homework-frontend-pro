const number = Number(prompt("Введіть будь-яке число"));

if (!number) {
  alert("Щось невірно! Перезавантаж сторінку");
}

for (let i = 1; i <= 100; i++) {
  if (i * i < number) {
    console.log(i);
  }
}
