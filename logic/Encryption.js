const Encryption = (input) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetLow = [...alphabet];
  const alphabetUpp = [...alphabet.toUpperCase()];
  const word = input.split('');
  const hashed = [];

  word.forEach((letter) => {
    if (!alphabetLow.includes(letter) && !alphabetUpp.includes(letter)) {
      hashed.push(letter);
    } else if (letter === letter.toUpperCase()) {
      let currIndex = alphabetUpp.indexOf(letter) + 13;

      if (currIndex >= 26) {
        currIndex = currIndex - 26;
      }
      hashed.push(alphabetUpp[currIndex]);
    } else {
      let currIndex = alphabetLow.indexOf(letter) + 13;

      if (currIndex >= 26) {
        currIndex = currIndex - 26;
      }
      hashed.push(alphabetLow[currIndex]);
    }
  });
  return hashed.join('');
};

export default Encryption;
