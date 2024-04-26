const conmpany = {
  sales: [
    { name: "Jhon", salary: 1000 },
    { name: "Alice", salary: 600 },
    { name: "Bob", salary: 1200 },
    { name: "Bob", salary: 1000 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
      { name: "Max", salary: 600 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function totalSales(data) {
  let totalSalary = 0;
  for (const key in data) {
    if (Array.isArray(data[key])) {
      data[key].forEach((el) => {
        totalSalary += el.salary;
      });
    } else {
      totalSalary += totalSales(data[key]);
    }
  }
  return totalSalary;
}

const total = totalSales(conmpany);
console.log(total);
