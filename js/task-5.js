'use stirct'

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
  outputRef.textContent = inputRef.value === '' ? 'незнакомец' : inputRef.value;
});