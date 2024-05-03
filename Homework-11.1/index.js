const table = document.querySelector("table");

for (let i = 1; i <= 10; i++) {
  let tr = document.createElement("tr");

  for (let j = 1; j <= 10; j++) {
    let td = document.createElement("td");
    td.textContent = i * j;
    table.append(td);
  }
  table.append(tr);
}
