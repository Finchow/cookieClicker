let cookies = 0;
let cps = 1;

let workerObjects = [];

const workerStats = [
  // [name, cps, price, image path or url]
  ["Clicker", 1, 5, "images/clicker.png"],
  ["Granny", 5, 30, "images/rollingPin.png"],
  ["Farm", 15, 100, "images/farm.webp"],
  ["Factory", 25, 500, "images/factory.jpg"],
  ["Cookie Rig", 35, 1500, "images/rig.jpg"],
];

class workers {
  constructor(name, cps, price, image) {
    if (name === "Clicker") {
      this.quantity = 1;
    } else {
      this.quantity = 0;
    }
    this.name = name;
    this.cps = cps;
    this.price = price;
    this.image = image;
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

function displayShopItems() {
  let outputButtons = [];
  for (let shopItem in workerObjects) {
  }
}

function buyShopItem(name, price) {}

for (let worker of workerStats) {
  let [name, cps, price] = worker;
  let newWorker = new workers(name, cps, price);
  workerObjects.push(newWorker);
}

setInterval(addCookies, 1000);
