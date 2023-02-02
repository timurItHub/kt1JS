let arr = [];
for (let i = 0; i < 30; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

let table = document.createElement('table');
for (let i = 0; i < 5; i++) {
  let row = document.createElement('tr');
  for (let j = 0; j < 6; j++) {
    let cell = document.createElement('td');
    cell.innerHTML = arr[i * 6 + j];
    if (arr[i * 6 + j] >= 50) {
      cell.style.backgroundColor = 'orange';
    }
    row.appendChild(cell);
  }
  table.appendChild(row);
}
document.body.appendChild(table);

function foo() {
  let num = Math.floor(Math.random() * 100);
  let row = document.createElement('tr');
  let cell = document.createElement('td');
  cell.innerHTML = num;
  if (num >= 50) {
    cell.style.backgroundColor = 'orange';
  }
  row.appendChild(cell);
  table.appendChild(row);
}
