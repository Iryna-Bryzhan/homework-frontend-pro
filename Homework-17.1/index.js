class Calculator {
  add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }

  subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  }

  multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  }

  divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
      return "Cannot divide by zero";
    }
    return firstNumber - secondNumber;
  }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4
