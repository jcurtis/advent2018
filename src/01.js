function part1(input) {
  const tokens = input.split('\n');
  return tokens
    .map(token => parseInt(token, 10))
    .filter(num => !Number.isNaN(num))
    .reduce((acc, num) => acc + num, 0);
}

function part2(input) {
  const tokens = input.split('\n');
  const nums = tokens.map(token => parseInt(token, 10)).filter(num => !Number.isNaN(num));

  const freqs = {
    0: 1
  };

  let found;
  let total = 0;
  while (found == null) {
    total = nums.reduce((acc, num) => {
      const sum = acc + num;
      if (found == null && freqs[sum] === 1) {
        found = sum;
      } else {
        freqs[sum] = 1;
      }
      return sum;
    }, total);
  }
  return found;
}

module.exports = {
  part1,
  part2
};
