var { documental1, documental2 } = require("./Documental.js");
var { pelicula1, pelicula2 } = require("./Pelicula");

class Cine {
    constructor(cadena, butacas, pantallas) {
        this.cadena = cadena;
        this.butacas = butacas;
        this.pantallas = pantallas;
    }
    reproducirLarjometraje(largometraje) {
        if (largometraje.entrada == "$3") {
            return "Estas viendo el documental " + largometraje.titulo
        } else {
            return "Estas viendo la pelicula " + largometraje.titulo
        }
        // return largometraje
    }
}

var cine1 = new Cine("Cinepolis", 100, 8);

console.log(cine1.reproducirLarjometraje(pelicula1))
console.log(cine1.reproducirLarjometraje(documental1))