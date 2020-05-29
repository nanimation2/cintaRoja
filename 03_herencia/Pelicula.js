var { Largometraje } = require("./Largometraje");//importa la clase Largometraje

class Pelicula extends Largometraje {
    constructor(titulo, duracion, genero, director) {
        super(titulo, duracion);
        this.genero = genero;
        this.director = director;
        this.entrada = "$5";
    }
}
var pelicula1 = new Pelicula("episodio I starwars", "1:30 mins", "ciencia ficcion", "george lucas")
var pelicula2 = new Pelicula("hombre al agua", "1:20 min", "comedia", "comediante")
// console.log(pelicula1);
// console.log(pelicula2);

module.exports = { pelicula1, pelicula2 }