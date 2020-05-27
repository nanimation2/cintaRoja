// json
// js = javaScript
// O = objet
// N = notation

// objeto
var perro = {
    nombre: "ayudante de Santa",
    edad: 31,
    color: "cafe",
    vive: true,
    juguetes: ["pelota", "hueso", "peluche"],
    familia:{
        padre: "Homero",
        madre: "Marge",
        hermana: "Lisa",
        hermano:"Bart"
    },
    juega: function(){
        return "el perro esta jugando" 
    }

}
console.log(perro);
console.log(perro.color)
console.log(perro.juguetes[1])
console.log(perro.familia.hermana)
console.log(perro.juguetes)
console.log(perro.familia)
console.log(perro.juega())

// arreglo
var paises =["México","Colombia", "Ecuador", "Perú"];



// console.log(paises);