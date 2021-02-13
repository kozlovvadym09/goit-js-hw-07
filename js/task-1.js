'use strict'


const numberOfCategories = document.querySelectorAll('.item');

console.log(`В списке ${numberOfCategories.length} категории.`);

const textInCategories = [...numberOfCategories].
  
  map(textElements => `Категория: ${textElements.children[0].textContent} 
Количество элементов: ${textElements.children[1].children.length}`).join("\n");
 
console.log(textInCategories);