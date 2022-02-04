import onClick from "./onClick.js";

const ref = document.querySelector('h1');
ref.addEventListener('click', (evt) => onClick(evt, ref));
// вызов анонимной ф-ции - если назвать, то как передать дальше?
