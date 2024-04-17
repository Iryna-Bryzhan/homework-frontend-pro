// Можно вводити тільки числа

function printChoise() {
  let arrAnswer = [];

  for (let i = 0; arrAnswer.length < 10; i++) {
    let answer = Number(prompt("Введіть число більше ста"));

    if (!answer || answer < 100) {
      alert("Введіть ще раз");
    } else {
      arrAnswer.push(answer);
    }
  }
  console.log(arrAnswer);
  console.log(arrAnswer[arrAnswer.length - 1]);
}
printChoise();

// Можно вводити і числа, і текст

function printChoise() {
  let arrAnsw = [];

  for (let i = 0; arrAnsw.length < 10; i++) {
    let answ = prompt("Введіть число більше ста");

    if (answ < 100) {
      alert("Введіть ще раз");
    } else {
      arrAnsw.push(answ);
    }
  }
  console.log(arrAnsw);
  console.log(arrAnsw[arrAnsw.length - 1]);
}
printChoise();
