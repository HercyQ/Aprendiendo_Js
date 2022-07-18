const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Destructuring
const { precio, nombreProducto } = producto; //Extrae el valor de la propiedad y crea la variable en una

console.log(precio);
console.log(nombreProducto);