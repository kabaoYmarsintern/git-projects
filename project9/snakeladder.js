
function createTable() {
  let table = document.getElementById("myTable");

  for (let i = 0; i < 10; i++) {
    let row = table.insertRow(i);
    row.className = "row-direction";

    for (let j = 0; j < 10; j++) {
      let cell = row.insertCell(j);
      cell.innerHTML = i * 10 + j + 1;
      cell.className = "item";
    }
  }
};

document.getElementById("mk-table").addEventListener("click", createTable);