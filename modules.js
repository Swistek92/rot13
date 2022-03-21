const name = document.getElementById('name');
const out = document.getElementById('out');
const form = document.getElementById('form');

const casar13 = (input) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetLow = [...alphabet];
  let alphabetUpp = [...alphabet.toUpperCase()];
  let word = input.split('');
  let newArr = [];

  word.forEach((letter) => {
    if (letter.match(/[0-9]/g)) {
      console.log('find a number');
      newArr.push(letter);
    } else if (letter === letter.toUpperCase()) {
      let currIndex = alphabetUpp.indexOf(letter) + 13;
      if (currIndex > 26) {
        currIndex = currIndex - 26;
      }
      newArr.push(alphabetUpp[currIndex]);
    } else {
      let currIndex = alphabetLow.indexOf(letter) + 13;
      if (currIndex > 26) {
        currIndex = currIndex - 26;
      }
      newArr.push(alphabetLow[currIndex]);
    }
  });

  // console.log(word);

  return newArr.join('');
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(typeof name.value);

  out.innerHTML = casar13(name.value);
});
