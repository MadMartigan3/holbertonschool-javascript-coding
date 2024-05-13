#!/usr/bin/node

const fs = require('fs');

function writeFile(filepath, data) {
  fs.writeFile(filepath, data, 'utf8', (err) => {
    if (err) {
      console.log(err);
      return;
    }
    else {
      console.log('Content has been written to the file successfully!');
    }
  });
}

if (process.argv.length !== 4) {
  console.error('Usage: ./1-writeme.js <file_path> <string>');
}
else {
  const filepath = process.argv[2];
  const data = process.argv[3];
  writeFile(filepath, data)
}
