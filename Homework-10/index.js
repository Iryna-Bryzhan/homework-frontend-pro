const currency = prompt("Яка валюта цікавить - eur чи usd?");
const arrCurrency = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

switch (currency) {
  case "eur": {
    for (let i = 10, j = 0; i <= 100, j < arrCurrency.length; i += 10, j++) {
      const resultCurrency = i * 32;
      console.log(`${arrCurrency[j]}€ - ${resultCurrency}₴`);
    }
    break;
  }
  case "usd": {
    for (let i = 10, j = 0; i <= 100, j < arrCurrency.length; i += 10, j++) {
      const resultCurrency = i * 26;
      console.log(`${arrCurrency[j]}$ - ${resultCurrency}₴`);
    }
    break;
  }
  default: {
    alert("Невірно вказана валюта");
  }
}
