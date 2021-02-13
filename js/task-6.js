'use stirct'

const inputRef = document.querySelector('#validation-input');
const inputLengthRef = document.querySelector('#data-length');


const inputReqNum = () =>
   inputRef.value.length === Number(inputRef.getAttribute('data-length')) ?
   (inputRef.classList.add('valid'), inputRef.classList.remove('invalid'))
   :(inputRef.classList.add('invalid'), inputRef.classList.remove('valid'))  
   
   inputRef.addEventListener('input', inputReqNum);