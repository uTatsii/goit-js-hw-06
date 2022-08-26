const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = '56px';

input.addEventListener("input", getCurrentFontSize);

function getCurrentFontSize(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
