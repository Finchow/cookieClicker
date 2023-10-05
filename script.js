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

  for (let shopItem of workerObjects) {
    // Every button contains
    // - an image
    // - name & price

    const image = document.createElement("img");
    image.src = shopItem.image;
    image.className = "shopImage";

    const itemDescription = document.createElement("div");
    itemDescription.appendChild(document.createTextNode(shopItem.name));
    itemDescription.appendChild(document.createElement("br"));
    itemDescription.appendChild(
      document.createTextNode(`${shopItem.price} Cookies`)
    );

    const shopItemButton = document.createElement("button");
    shopItemButton.className = "shopItem";
    shopItemButton.appendChild(image);
    shopItemButton.appendChild(itemDescription);

    shopItemButton.addEventListener("click", () => buyShopItem(shopItem));

    // For each button, we then need to add it to the shop div
    const shopItemsContainer = document.getElementById("shop-items-container");
    shopItemsContainer.appendChild(shopItemButton);
  }
}

function buyShopItem(shopItem) {}

for (let worker of workerStats) {
  let [name, cps, price, image] = worker;
  let newWorker = new workers(name, cps, price, image);
  workerObjects.push(newWorker);
}

displayShopItems();

setInterval(addCookies, 1000);
