console.log('hola mundo');
// numerico
var edad = 26;
console.log(typeof edad);
console.log(edad);

// string
var nombre = "samuel";
console.log(typeof nombre);
console.log(nombre);

// booleanos
var casado = false;
console.log(typeof casado);
console.log(casado);

// operadores logicos
console.log("5 > 9");
console.log(5 > 9);

console.log("0 <3 ");
console.log(0 < 3);

console.log("-3 >= -9");
console.log(-3 >= -9);

console.log("nombre == juan");
console.log(nombre === "juan");

// condicionales
if (-3 >= -9) {
    console.log('la condicion se cumple')
} else (
    console.log('la condicion no se cumple ')
)


// funciones
function mayorDeEdad(x){
    if(x >= 18){
        console.log(x + " Mayor de edad")
    }else{
        console.log(x + " no eres mayor de edad")
    }
}
mayorDeEdad(19);
mayorDeEdad(5);
mayorDeEdad(99)