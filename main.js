// let a = parseInt(prompt("ingrese cuantas medialunas quiere"))
// let b = parseInt(prompt("ingrese cuantos cafes"))
// let resultado1 = 0;
// let resultado2 = 0;
// let suma = 0;
// const medialuna = 45;
// const cafe = 100;
// function total(a, b){
//     suma = a * medialuna + b * cafe;
// }
// total(a, b)
// alert("Usted debe " + suma);


    
const baseDeDatos = ["Medialunas 45", "Cafe 100"];
for (let i=0; i < baseDeDatos.length; i++) {   
 document.getElementById("productos").innerHTML += "<li>" + baseDeDatos[i] + "</li>" 
}
// con la clase de hoy de jason y dom ya puedo obtener los datos de otra manera
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.total = function () {
            return precio * cantidad
        }
    }
}
const medialuna = new Producto("Medialuna", 45, parseInt(prompt("ingrese cuantas medialunas quiere")))
const cafe = new Producto("Cafe", 100, parseInt(prompt("ingrese cuantos cafes")))
let debe = medialuna.total() + cafe.total();
alert("Usted debe " + debe)
