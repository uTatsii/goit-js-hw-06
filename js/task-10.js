const amountOfBoxes = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const mainBox = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  amount = amountOfBoxes.value;

  const boxesToAdd = [];

  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = box.style.width;
    box.style.backgroundColor = getRandomHexColor();
    boxesToAdd.push(box);
  }

  return mainBox.append(...boxesToAdd);
}

function destroyBoxes() {
  mainBox.innerHTML = "";
  amountOfBoxes.value = "";
}
