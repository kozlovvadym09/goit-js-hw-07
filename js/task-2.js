'use strict'

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
   'Приправы',
]; 

const ulRef = document.querySelector('#ingredients');

const liTitlesRef = ingredients.map(ingredient => {
   const liRef = document.createElement('li');
   liRef.textContent = ingredient;
   return liRef;
});

ulRef.append(...liTitlesRef);
console.log(ulRef);

