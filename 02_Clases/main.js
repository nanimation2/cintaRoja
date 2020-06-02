//   var platillo = {
//       nombre: "hamburguesa",
//       ingredientes: ["carne","queso", "mayonesa", "mostaza"],
//       tamaño: "doble",
//       conTOcino: true
//   }

//   console.log(platillo)
//   console.log(platillo.nombre)

class Autos {
    constructor(color, motor, matricula) {
        this.color = color
        this.motor = motor
        this.llatas = 4
        this.volante = true
        this.matricula = matricula

    }
    cambiarMotor(nuevoMotor) {
        this.motor = nuevoMotor;
        return "Se ha cambiado el motor";
    }
    pintarAuto(nuevoColor) {
        this.color = nuevoColor;
        return "Se ha pintado el auto";
    }
}

var miAuto = new Autos("Plata", "v4", "sdf5sdf4");
console.log(miAuto)
console.log(miAuto.cambiarMotor("Eléctrico"));
console.log(miAuto.pintarAuto("Púrpura"));
console.log(miAuto)
// console(miAuto.cambioMotor('elecrtico'))
// console.log(miAuto)