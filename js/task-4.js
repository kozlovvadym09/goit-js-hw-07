'use strict'

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



let counterValue = 0;

const incBtnRef = document.querySelector('[data-action="increment"]')
const decBtnRef = document.querySelector('[data-action="decrement"]')
const counterRef = document.querySelector('span')

const increment = () => {
    counterValue += 1;
    counterRef.textContent = counterValue;
}

const decrement = () => {
    counterValue -= 1;
    counterRef.textContent = counterValue;
}
incBtnRef.addEventListener('click', increment);
decBtnRef.addEventListener('click', decrement);

