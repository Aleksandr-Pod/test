import onClick from "./onClick.js";

const ref = document.querySelector('h1');
function handle(evt) { onClick(evt, ref, handle) };
ref.addEventListener('click', handle);

