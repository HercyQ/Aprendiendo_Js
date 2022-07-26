const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisor 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 }
];

//forEach
meses.forEach(function (mes) {
    if (mes == "Marzo") {
        console.log('Marzo si existe');
    }
});

//Includes
let resultado = meses.includes("Diciembre");
//9.38
//Some ideal para arreglo de objetos
let resultado2 = carrito.some(function (producto) {
    return producto.nombre === 'Celular';
})

console.log(resultado);
console.log(resultado2);

//Reduce
resultado3 = carrito.reduce(function (total, producto) {
    return total + producto.precio;
}, 0);

console.log(resultado3);

//Filter
resultado4 = carrito.filter(function (producto) {
    return producto.precio < 400;
});
console.log(resultado4);

resultado5 = carrito.filter(function (producto) {
    return producto.nombre !== 'Celular';
});

console.log(resultado5);