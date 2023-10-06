let cookies = 0;
let cps = 0;

let workerObjects = [];

const workerStats = [
  // [name, cps, price, image path or url]
  ["Clicker", 1, 25, "images/clicker.png"],
  ["Grandma", 5, 200, "images/rollingPin.png"],
  ["Farm", 15, 700, "images/farm.webp"],
  ["Mine", 25, 1800, "images/mine.jpg"],
  ["Factory", 35, 5000, "images/factory.jpg"],
  ["Cookie Rig", 100, 40000, "images/rig.jpg"],
];

class workers {
  constructor(name, cps, price, image) {
    this.quantity = 0;
    this.name = name;
    this.cps = cps;
    this.price = price;
    this.image = image;
  }
}

function update() {
  showCookieInfo();
  showWorkerInfo();
  clearShopItems();
  showShopItems();
}

function clickHandler() {
  cookies++;
  update();
}

function addCookies() {
  cookies += Math.ceil(cps / 4);
  update();
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

function showShopItems() {
  let outputButtons = [];

  for (let shopItem of workerObjects) {
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
    if (cookies < shopItem.price) {
      shopItemButton.id = "red-border";
    }
    shopItemButton.className = "shopItem";
    shopItemButton.appendChild(image);
    shopItemButton.appendChild(itemDescription);

    shopItemButton.addEventListener("click", () => buyShopItem(shopItem));

    const shopItemsContainer = document.getElementById("shop-items-container");
    shopItemsContainer.appendChild(shopItemButton);
  }
}

function clearShopItems() {
  const shopItemsContainer = document.getElementById("shop-items-container");
  shopItemsContainer.innerHTML = "";
}

function buyShopItem(shopItem) {
  if (cookies >= shopItem.price) {
    cookies -= shopItem.price;
    shopItem.quantity++;
    cps += shopItem.cps;
  } else {
    alert("Not enough Cookies");
  }
}

for (let worker of workerStats) {
  let [name, cps, price, image] = worker;
  let newWorker = new workers(name, cps, price, image);
  workerObjects.push(newWorker);
}

setInterval(addCookies, 250);
