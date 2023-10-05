let cookies = 0;
let cps = 1;

let workerObjects = [];

const workerStats = [
  // [name, cps, price]
  ["Clicker", 1, 5],
  ["Granny", 5, 30],
  ["Farm", 15, 100],
  ["Factory", 25, 500],
  ["Cookie Rig", 35, 1500],
];

class workers {
  constructor(name, cps, price) {
    if (name === "Clicker") {
      this.quantity = 1;
    } else {
      this.quantity = 0;
    }
    this.name = name;
    this.cps = cps;
    this.price = price;
  }
}

function addCookies() {
  cookies += cps;
  showCookieInfo();
  showWorkerInfo();
}

function showCookieInfo() {
  document.getElementById("totalCookies").textContent =
    "Total Cookies: " + String(cookies);
  document.getElementById("cps").textContent = "cps: " + String(cps);
}

function showWorkerInfo() {
  let outputText = [];
  for (let worker of workerObjects) {
    outputText.push(
      `${worker.name} x${worker.quantity} - (total cps: ${
        worker.quantity * worker.cps
      })`
    );
  }
  let workerItemsElement = document.getElementById("workerItems");
  workerItemsElement.textContent = "";
  for (let item of outputText) {
    let textNode = document.createTextNode(item);
    workerItemsElement.appendChild(textNode);
    workerItemsElement.appendChild(document.createElement("br"));
  }
}

function displayShopItems() {}

for (let worker of workerStats) {
  let [name, cps, price] = worker;
  let newWorker = new workers(name, cps, price);
  workerObjects.push(newWorker);
}

setInterval(addCookies, 1000);
