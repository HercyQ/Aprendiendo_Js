//Clases
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
    }

    devolverPrecio() {
        return `El precio del producto ${this.nombre} es ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

console.log(producto2);
console.log(producto3);
console.log(producto2.devolverPrecio());

class Libro {
    constructor(nombre, precio, isbn) {
        this.nombre = nombre;
        this.precio = precio;
        this.isbn = isbn;
    }
}

const libro = new Libro('Codigo limpio', '120', '46698745212');

console.log(libro);