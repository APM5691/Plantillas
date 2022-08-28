console.log("Hello World");

createTable = function (columns, head) {
  var table = document.createElement("table");

  var thead = document.createElement("thead");

  var tr = document.createElement("tr");

  head.map((head) => {
    var th = document.createElement("th");
    th.innerHTML = head;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  var tbody = document.createElement("tbody");

  for (var i = 0; i < columns.length; i++) {
    var tr = document.createElement("tr");
    for (var k in columns[i]) {
      var td = document.createElement("td");
      console.log(columns[3][k]);
      td.innerHTML = k;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  return table;
};

let header = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let rows = 2;

getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const data4 = await data.json();
  console.log(data4);
  document.body.appendChild(createTable(data4, header));
};

getData();
