detectAlerts = () => {
  let alerts = document.querySelectorAll(".alert");
  return alerts;
};

changePosition = () => {
  let alerts = detectAlerts();

  let size = alerts.length;

  let position = 90 - size * 10;

  return position;
};

resetPositions = () => {
  let alerts = detectAlerts();

  let size = alerts.length;

  let change = 100;
  alerts.forEach((alert) => {
    let position = change - size * 10;
    alert.style.top = position + "%";
    size = size - 1;
  });
};

createAlert = (message, type) => {
  const alert = document.createElement("div");

  alert.classList.add("alert");

  if (type === "success") {
    alert.classList.add("alert");
  } else if (type === "warning") {
    alert.classList.add("warning");
  } else if (type === "info") {
    alert.classList.add("info");
  }

  const span = document.createElement("span");
  span.innerText = " X";
  span.classList.add("closebtn");

  span.setAttribute("id", "close");

  span.addEventListener("click", () => {
    alert.remove();
    resetPositions();
  });

  // setTimeout(() => {
  //   alert.remove();
  //   resetPositions();
  // }, 10000);

  alert.style.top = changePosition() + "%";

  alert.innerHTML = message;
  alert.appendChild(span);
  document.body.appendChild(alert);

  return alert;
};

createAlert("Hello World!", "success");

createAlert("Hello World!", "warning");

createAlert("Hello World!", "info");

createAlert("Hello World!", "success");

createAlert("Hello World!", "warning");

createAlert("Hello World!", "info");
