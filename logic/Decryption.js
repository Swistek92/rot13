const Decryption = (input) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetLow = [...alphabet];
  const alphabetUpp = [...alphabet.toUpperCase()];
  const word = input.split('');
  const hashed = [];

  word.forEach((letter) => {
    if (!alphabetLow.includes(letter) && !alphabetUpp.includes(letter)) {
      hashed.push(letter);
    } else if (letter === letter.toUpperCase()) {
      let currIndex = alphabetUpp.indexOf(letter) - 13;
      if (currIndex < 0) {
        currIndex = 26 - Math.abs(currIndex);
      }
      hashed.push(alphabetUpp[currIndex]);
    } else {
      let currIndex = alphabetLow.indexOf(letter) - 13;
      if (currIndex < 0) {
        currIndex = 26 - Math.abs(currIndex);
      }
      hashed.push(alphabetLow[currIndex]);
    }
  });
  return hashed.join('');
};

export default Decryption;
