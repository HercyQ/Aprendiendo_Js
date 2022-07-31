//Clases
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    obtenerPrecio() {
        console.log(this.precio);
    }
}

const producto1 = new Producto('Monitor Curvo de 49"', 800);

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }

    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Si hay stock');
    }
}

const libro = new Libro('Codigo limpio', '120', '46698745212');

console.log(libro.formatearProducto());
console.log(producto1.formatearProducto());
console.log(libro.obtenerPrecio());