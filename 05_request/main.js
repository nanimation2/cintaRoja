const request = require('request');

request('https://pokeapi.co/api/v2/pokemon/ditto',(error, response, body) => {
    console.log(error);
    console.log(response)
})