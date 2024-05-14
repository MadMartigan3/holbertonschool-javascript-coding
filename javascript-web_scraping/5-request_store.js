#!/usr/bin/node

const request = require('request');
const fs = require('fs');

function getWebPage(url, filepath) {
    request(url, function (error, response, body) {
        if (error) {
        console.error(error);
        return;
        }
        if (response.statusCode !== 200) {
            console.error('statusCode:', response.statusCode);
            return;
        }
        fs.writeFile(filepath, body, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('The file has been saved to ${filepath}');
        });
    });
}

if (process.argv.length !== 4) {
    console.error('Usage: ./5-request_store.js <URL> <filepath>');
    process.exit(1);
}

const url = process.argv[2];
const filepath = process.argv[3];

getWebPage(url, filepath);
