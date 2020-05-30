// function miPrimerCallback(operacion, a, b) {
//     return operacion(a, b);
// }

// function suma(a, b) {
//     return a + b;
// }
// function resta(a, b) {
//     return a - b;
// }

// console.log(miPrimerCallback(suma, 8, 4))
// console.log(miPrimerCallback(resta, 8, 4))

// function ordenSuperior(consola, mensaje) {
//     return consola(mensaje)
// }
// function warn(mensaje) {
//     console.warn(mensaje)
// }
// function info(mensaje) {
//     console.info(mensaje)
// }
// function error(mensaje) {
//     console.error(mensaje)
// }

// ordenSuperior(warn, 'cuidadito')
// ordenSuperior(error, 'Errorcito')


// // asi se iteran arreglos mas facil, con el foreach 
// const array = ["México", "Peru", "Colombia", "rusia"];
// array.forEach((element) => console.log(element))

// const newArray = array.map((a,b) => "pais " + b +" : " + a)
// console.log(newArray)

// no me funciono ------------------------------ 
function ordenSuperior(cadena, convertir) {
    return convertir(cadena)
}

function mayusculas(cadena) {
    return cadena.toUpperCase();
}

function minusculas(cadena) {
    return cadena.toLowerCase();
}

console.log(ordenSuperior('cosa', mayusculas))