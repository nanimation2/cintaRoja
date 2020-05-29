
// mascota es la super clase 
class Mascota {
    // todas las clases lo tienen 
    constructor(nombre, patas) {
        this.nombre = nombre;
        this.cerebro = true;
        this.patas = patas
    }

    alimetarse() {
        return this.nombre + " se esta alimentando."
    }

}
// extends hace a perro una sub clase de mascota 
class Perro extends Mascota {
    constructor(nombre, patas, ladra, cola) {
        super(nombre, patas);
        this.ladra = ladra;
        this.cola = cola;
    }
    // esto es una funcion dentro de una clase 
    truco() {
        return this.nombre + " esta haciendo un truco."
    }
}

var perro1 = new Perro("sindy", 4, true, true);
console.log(perro1);
console.log(perro1.alimetarse());
console.log(perro1.truco());



class serpiente extends Mascota {
    constructor(nombre, patas, color) {
        super(nombre, patas);
        this.color = color;
        this.venenosa = false;
    }
    enroscarse() {
        return this.nombre + " se etá enrroscando"
    }
}
var serpiente1 = new serpiente("boa", 0, "cafe");
console.log(serpiente1)
console.log(serpiente1.alimetarse());
console.log(serpiente1.enroscarse());