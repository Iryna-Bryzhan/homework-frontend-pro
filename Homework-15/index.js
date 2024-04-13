const array = [1, 3, 4, 6, 2, 5, 7, 3];

function removeElement(array, item) {
  return array.filter((el) => el !== item);
}

let newArr = removeElement(array, 3);

console.log(newArr); // Результат: [1, 3, 6, 2, 5, 7]
