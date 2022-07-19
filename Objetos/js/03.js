'use strict'; //Correr Js en modo estricto

//Objetos
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//freeze -> Impide q se modifique, agregue o elimine propiedades del objeto
//seal -> Permite solo modificar las propiedades
Object.freeze(producto); 

console.log(Object.isFrozen(producto)); //Se verifica si objeto esta bloqueado para modificar

