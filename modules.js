import Encryption from './Encryption.js';
import Decryption from './Decryption.js';

const nameEncrypt = document.getElementById('nameEncrypt');
const outEncrypt = document.getElementById('outEncrypt');
const formEncrypt = document.getElementById('formEncrypt');
const boxEncrypt = document.getElementById('boxEncrypt');

const nameDecrpt = document.getElementById('nameDecrpt');
const outDecrpt = document.getElementById('outDecrpt');
const formDecrpt = document.getElementById('formDecrpt');
const boxDecrpt = document.getElementById('boxDecrpt');

formEncrypt.addEventListener('submit', (e) => {
  e.preventDefault();
  const output = Encryption(nameEncrypt.value);
  outEncrypt.innerHTML = output;

  if (nameEncrypt.value === '') {
    boxEncrypt.style.display = 'none';
  } else {
    boxEncrypt.style.display = 'block';
  }
});

formDecrpt.addEventListener('submit', (e) => {
  e.preventDefault();
  const output = Decryption(nameDecrpt.value);
  outDecrpt.innerHTML = output;

  if (nameDecrpt.value === '') {
    boxDecrpt.style.display = 'none';
  } else {
    boxDecrpt.style.display = 'block';
  }
});
