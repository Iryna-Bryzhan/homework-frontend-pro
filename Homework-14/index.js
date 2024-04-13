const array = [{}, 1, 2, 3, 4, 5, 6, "string", null];

function average(array) {
  const newArr = array.filter((item) => typeof item === "number");
  const total = newArr.reduce((acc, el) => acc + el, 0);
  return total / newArr.length;
}

const result = average(array);

console.log(result);
