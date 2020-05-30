var { Largometraje } = require("./Largometraje");

class Documental extends Largometraje {
    constructor(titulo, duracion, patrocinador, anio) {
        super(titulo, duracion);
        this.patrocinador = patrocinador;
        this.anio = anio;
        this.entrada = "$3";
    }
}

var documental1 = new Documental("the last dance", "5:00", "netflox", 2020);
var documental2 = new Documental("supersonic", "2:00", "Netflix", 2019);

module.exports = {
    documental1,
    documental2
};

// console.log(documental1);
// console.log(documental2)