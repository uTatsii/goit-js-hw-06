let counterValue = 0;

const counterValueSpan = document.querySelector("#value");
const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");

const handlerDecrementClick = () => {
  counterValueSpan.textContent = counterValue += -1;
};
const handlerIincrementClick = () => {
  counterValueSpan.textContent = counterValue += 1;
};

decrementBtn.addEventListener("click", handlerDecrementClick);
incrementBtn.addEventListener("click", handlerIincrementClick);
