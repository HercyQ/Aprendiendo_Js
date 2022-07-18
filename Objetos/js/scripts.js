//Objetos

const producto = {
    nombreProducto: "Televisor 20 pulgadas",
    precio: 1300,
    disponible: true
}

// console.log(producto.nombreProducto);

//Agergar nuevas propiedades
producto.imagen = "imagen.jpg";

//Eliminar propiedades
delete producto.disponible;

console.log(producto);