'use stirct'

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const changeSizeFont = () => spanRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('input', changeSizeFont);