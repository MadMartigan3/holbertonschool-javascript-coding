#!/usr/bin/node

const fs = require('fs');

function readFile(filepath) {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}

if (process.argv.length !== 3) {
  console.error('Usage: ./0-readme.js <file_path>');
} else {
    const filepath = process.argv[2];
    readFile(filepath)
}
