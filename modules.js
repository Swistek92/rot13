import casar13 from './caser13.js';
const name = document.getElementById('name');
const out = document.getElementById('out');
const form = document.getElementById('form');
console.log(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let output = casar13(name.value);
  out.innerHTML = output;
});
