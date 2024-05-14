#!/usr/bin/node

const request = require('request');

function countCharacter(apiUrl, characterId){
    const url = `${apiUrl}?format=json`;

    request(url, (error, response, body) => {
        if(error) {
            console.error(error);
            return;
        }
        if (response.statusCode !== 200) {
            console.error('Status code :', response.statusCode);
            return;
        }

        const data = JSON.parse(body);
        const movies = data.results;
        let count = 0;

        movies.forEach(movie => {
            if (movie.characters.includes('https://swapi-api.hbtn.io/api/people/' + characterId + '/')) {
                count++;
            }
        });
        console.log(count);
    });
}

if (process.argv.length !== 3) {
    console.error('Usage: ./4-starwars_count.js <apiUrl>');
    process.exit(1);
}

const apiUrl = process.argv[2];
const characterId = 18;

countCharacter(apiUrl, characterId);
