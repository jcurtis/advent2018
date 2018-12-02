const { promisify } = require('util');
const fs = require('fs');
const path = require('path');

const readFile = promisify(fs.readFile);

function readInput(fileName) {
  return readFile(path.join(__dirname, '../input/', fileName), { encoding: 'utf8' });
}

module.exports = readInput;
