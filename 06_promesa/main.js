const request = require('request')
const { Banda } = require('./Banda')

// busca banda funcion que retorna una promesa
const buscaBanda = (nombre) => {
    return new Promise((resolve, reject) => {
        const endPoint = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${nombre}`
        // ejecuta el reuest (lo que pide )
        request(endPoint, (error, response, body) => {
            if (error === null) {
                // console.log('encontre a la banda')
                // console.log(body)
                const respuesta = JSON.parse(body);
                // console.log(respuesta.artists[0].strArtist)
                const banda = new Banda(
                    respuesta.artists[0].strArtist,
                    respuesta.artists[0].intBornYear,
                    respuesta.artists[0].strWebsite,
                    respuesta.artists[0].strGenre
                )
                resolve(banda)

            } else {
                reject('no encontre a la banda')
            }
        })
    })
}

buscaBanda("queen")
    .then((banda) => console.log(banda))
    .catch((error) => console.log(error))


buscaBanda("jose jose")
    .then((banda) => console.log(banda))
    .catch((error) => console.log(error))