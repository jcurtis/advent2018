const letters = 'abcdefghijklmnopqrstuvwxz'.split('').map(letter => new RegExp(letter, 'gi'));

function part1(input) {
  let two = 0;
  let three = 0;
  const lines = input
    .split('\n')
    .map(str => str.trim())
    .filter(token => token != null && token !== '');

  lines.forEach(line => {
    let foundTwo = false;
    let foundThree = false;
    letters.forEach(letter => {
      const res = line.match(letter);
      if (res != null) {
        if (!foundTwo && res.length === 2) {
          foundTwo = true;
          two++;
        } else if (!foundThree && res.length === 3) {
          foundThree = true;
          three++;
        }
      }
    });
  });
  return two * three;
}

function compare(str1, str2) {
  const tokens1 = str1.split('');
  const tokens2 = str2.split('');
  let diffs = 0;
  let res = '';
  tokens1.forEach((token, index) => {
    if (token !== tokens2[index]) {
      diffs++;
    } else {
      res = res.concat(token);
    }
  });
  return diffs === 1 ? res : null;
}

function part2(input) {
  const lines = input
    .split('\n')
    .map(str => str.trim())
    .filter(token => token != null && token !== '');

  let result;
  lines.forEach((line, index) => {
    const rest = lines.slice(index + 1);
    rest.forEach(nextLine => {
      const res = compare(line, nextLine);
      if (res != null) {
        result = res;
      }
    });
  });
  return result;
}

module.exports = { part1, part2, compare };
