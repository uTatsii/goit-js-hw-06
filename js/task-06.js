const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);
input.addEventListener("focus", onInputFocus);

function onInputBlur(event) {
  event.currentTarget.value.length === Number(input.dataset.length)
    ? input.classList.add("valid")
    : input.classList.add("invalid");

  if (event.currentTarget.value === "") {
    input.classList.remove("valid", "invalid");
  }
}

function onInputFocus() {
  input.classList.remove("valid", "invalid");
}
