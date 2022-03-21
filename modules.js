import casar13 from './caser13';

const name = document.getElementById('name');
const out = document.getElementById('out');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(typeof name.value);

  out.innerHTML = casar13(name.value);
});
