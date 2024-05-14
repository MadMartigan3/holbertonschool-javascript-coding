#!/usr/bin/node

const request = require('request');

function readStatusCode(url) {
  request(url, (err, response) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('code:', response.statusCode);
    }
  });
}

if (process.argv.length !== 3) {
  console.error('Usage: ./2-statuscode.js <url>');
}

const url = process.argv[2];
readStatusCode(url);

