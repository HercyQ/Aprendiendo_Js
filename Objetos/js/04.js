const producto = {
    nombreProducto: "Televisor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1mt'
}

//spread operator
const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);