#!/usr/bin/node

const request = require('request');

function getMovieTitle(Id){
    const url = `https://swapi-api.hbtn.io/api/films/${Id}`;
    request(url, (err, response, body) => {
        if (err) {
        console.log(err);
        return;
        }
        if (response.statusCode !== 200) {
        console.log(`Error code: ${response.statusCode}`);
        return;
        }
        else {
        console.log(JSON.parse(body).title);
        }
    });
}

if (process.argv.length !== 3) {
    console.error('Usage: ./3-starwars_title.js <id>');
}

const id = process.argv[2];
getMovieTitle(id);
