const array = [10, 1, 33, 46, 52];//declaracion del arrelo

//manera imperativa de programacion
for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
}

//manera funcional
array.forEach(function (valor) {
    // console.log(valor)
})
//generar un arreglo con map

array.map((a, b, c) => console.log(a, b, c))
const array2 = array.map((element, index) => `indice ${index} ${element * 2}`)
console.log(array2);

// filter
// genera un nuev arreglo a partri de una condicion

const arraynose = array.filter((element) => element % 2 !== 0)
console.log(arraynose)

const countries = ["México", "Perú", "Colombia", "Costa Rica"]

const filtredCountries = countries.filter((country) => country.length <= 6)
console.log(filtredCountries)
