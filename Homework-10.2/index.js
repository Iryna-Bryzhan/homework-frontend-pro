const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEnevNumbers(arr) {
  const newArr = arr.filter((elem) => {
    if (elem % 2 === 0) {
      return elem;
    }
  });
  return newArr;
}

const even = getEnevNumbers(arr);
console.log(even); // [2, 4, 6, 8]
