import caesar13 from './caesar13.js';
const name = document.getElementById('name');
const out = document.getElementById('out');
const form = document.getElementById('form');
const box = document.getElementById('box');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let output = caesar13(name.value);
  out.innerHTML = output;

  if (name.value === '') {
    box.style.display = 'none';
  } else {
    box.style.display = 'block';
  }
});
