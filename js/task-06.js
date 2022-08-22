const input = document.querySelector('#validation-input');

input.addEventListener('blur', inputOnBlur);
input.addEventListener('focus', inputOnFocus)

function inputOnBlur(event) {
    event.currentTarget.value.length === Number(input.dataset.length)
        ? input.classList.add('valid')
        : input.classList.add('invalid');
    
    if (event.currentTarget.value === '') {
        input.classList.remove('valid', 'invalid')
    }
}

function inputOnFocus(event) {
    input.classList.remove('valid', 'invalid')
}