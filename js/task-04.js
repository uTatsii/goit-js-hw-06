let counterValue = 0;

const counterValueSpan = document.querySelector("#value");
const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector('[data-action=increment]');

const decrementClick = () => {
    counterValueSpan.textContent = counterValue += -1;
};
const incrementClick = () => {
    counterValueSpan.textContent = counterValue += 1;
}

decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener('click', incrementClick)