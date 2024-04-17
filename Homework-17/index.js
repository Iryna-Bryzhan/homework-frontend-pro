function mult(number) {
  return function (number2) {
    return number * number2;
  };
}

const result = mult(5)(3);

console.log(result);
