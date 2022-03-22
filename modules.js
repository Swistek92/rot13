import Encryption from './logic/Encryption.js';
import Decryption from './logic/Decryption.js';
import language from './db/language.js';
const nameEncrypt = document.getElementById('nameEncrypt');
const outEncrypt = document.getElementById('outEncrypt');
const formEncrypt = document.getElementById('formEncrypt');
const boxEncrypt = document.getElementById('boxEncrypt');

const nameDecrpt = document.getElementById('nameDecrpt');
const outDecrpt = document.getElementById('outDecrpt');
const formDecrpt = document.getElementById('formDecrpt');
const boxDecrpt = document.getElementById('boxDecrpt');

const link = document.querySelectorAll('a');
const langE = document.querySelector('.langWrap');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const warning = document.querySelector('.warning');

const labelEncrypt = document.querySelector('.labelEncrypt');
const titleEnrypt = document.querySelector('.titleEnrypt');
const btnEncrypt = document.querySelector('.btnEncrypt');
const labelOutEncrypt = document.querySelector('.labelOutEncrypt');

const titleDecrypt = document.querySelector('.titleDecrypt');
const labelDecrypt = document.querySelector('.labelDecrypt');
const btnDecrypt = document.querySelector('.btnDecrypt');
const labelOutDecrypt = document.querySelector('.labelOutDecrypt');

link.forEach((el) => {
  el.addEventListener('click', () => {
    langE.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');
    title.textContent = language[attr].title;
    description.textContent = language[attr].description;
    warning.textContent = language[attr].warning;

    titleEnrypt.textContent = language[attr].titleEnc;
    labelEncrypt.textContent = language[attr].labelEnc;
    btnEncrypt.textContent = language[attr].btnEnc;
    labelOutEncrypt.textContent = language[attr].outEnc;

    titleDecrypt.textContent = language[attr].titleDec;
    labelDecrypt.textContent = language[attr].labelDec;
    btnDecrypt.textContent = language[attr].btnDec;
    labelOutDecrypt.textContent = language[attr].outDec;
  });
});

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
