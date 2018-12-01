const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const { part1, part2 } = require('../src/01.js');

const readFile = promisify(fs.readFile);

let input1;
beforeAll(async () => {
  input1 = await readFile(path.join(__dirname, '../input/input01'), { encoding: 'utf8' });
});

describe('part1', () => {
  const sample1 = `
    +1
    +1
    +1
  `;
  test('sample 1', () => {
    expect(part1(sample1)).toBe(3);
  });

  const sample2 = `
    +1
    +1
    -2
  `;
  test('sample 2', () => {
    expect(part1(sample2)).toBe(0);
  });

  const sample3 = `
    -1
    -2
    -3
  `;
  test('sample 3', () => {
    expect(part1(sample3)).toBe(-6);
  });

  test('input 1', () => {
    const answer1 = part1(input1);
    console.log({ answer1 });
    expect(answer1).toBe(595);
  });
});

describe('part2', () => {
  const sample1 = `
    +1
    -1
  `;
  test('sample 1', () => {
    expect(part2(sample1)).toBe(0);
  });

  const sample2 = `
    +3
    +3
    +4
    -2
    -4
  `;
  test('sample 2', () => {
    expect(part2(sample2)).toBe(10);
  });

  const sample3 = `
    -6
    +3
    +8
    +5
    -6
  `;
  test('sample 3', () => {
    expect(part2(sample3)).toBe(5);
  });

  const sample4 = `
    +7
    +7
    -2
    -7
    -4
  `;
  test('sample 4', () => {
    expect(part2(sample4)).toBe(14);
  });

  test('input 1', () => {
    const answer2 = part2(input1);
    console.log({ answer2 });
    // expect(answer2).toBe(595);
  });
});
