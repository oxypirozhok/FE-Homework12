'use strict';

const input = document.querySelector(".inputPlus");
const btnPlus = document.querySelector('.plusBtn');
const btnMinus = document.querySelector('.minusBtn');

btnPlus.onclick = () => {
   let number = input.getAttribute('value');
   +number++;
   input.setAttribute('value',number);
  localStorage.setItem('value', number);
};


btnMinus.onclick = () => {
   let number = input.getAttribute('value');
   +number--;
   input.setAttribute('value',number);
  localStorage.setItem('value', number);
};

let value = localStorage.getItem('value');
input.setAttribute("value", value);