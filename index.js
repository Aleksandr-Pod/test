import onClick from "./onClick.js";

const ref = document.querySelector('h1');
ref.addEventListener('click', (evt) => onClick(evt, ref));

