const { part1, part2, compare } = require('../src/02');
const readInput = require('../utils/readInput');

let input;
beforeAll(async () => {
  input = await readInput('input02');
});

describe('part 1', () => {
  test('sample', () => {
    expect(
      part1(`
    abcdef
    bababc
    abbcde
    abcccd
    aabcdd
    abcdee
    ababab
    `)
    ).toBe(12);
  });

  test('answer', () => {
    expect(part1(input)).toMatchInlineSnapshot(`5434`);
  });
});

describe('part 2', () => {
  test('compare', () => {
    expect(compare('fghij', 'fguij')).toBe('fgij');
    expect(compare('abcde', 'axcye')).toBe(null);
  });

  test('sample', () => {
    expect(
      part2(`
    abcde
    fghij
    klmno
    pqrst
    fguij
    axcye
    wvxyz
    `)
    ).toBe('fgij');
  });

  test('answer', () => {
    expect(part2(input)).toMatchInlineSnapshot(`"agimdjvlhedpsyoqfzuknpjwt"`);
  });
});
