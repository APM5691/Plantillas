console.log("Hello World");

createTable = function (columns, head) {
  var table = document.createElement("table");

  if (head) {
    var thead = document.createElement("thead");

    var tr = document.createElement("tr");

    head.map((head) => {
      var th = document.createElement("th");
      th.innerHTML = head;
      tr.appendChild(th);
    });

    thead.appendChild(tr);

    table.appendChild(thead);
  }

  var tbody = document.createElement("tbody");

  columns.map((column) => {
    var tr = document.createElement("tr");
    for (let key in column) {
      var td = document.createElement("td");
      td.innerHTML = column[key];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  return table;
};

let header = [1, 2, 3, 4, 5, 6];

getData = async () => {
  const data = await fetch("https://back.jopaco.online/api/servicios");
  const info = await data.json();
  const table = document.getElementById("table");
  table.appendChild(createTable(info.data, header));
};

getData();
