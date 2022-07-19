//Arreglos

const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

//Acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[2]);

//Conocer la extension de un arreglo
console.log(meses.length);

meses.forEach(function (mes) {
    console.log(mes);
})

//agregar datos al arreglo
const fruta = ['fresa', 'naranja', 'pera'];

fruta.push('manzana', 'mango'); //Agrega al final

fruta.unshift('zandia', 'guayaba', 'cereza'); //(agrega al inicio

console.log(fruta);

fruta.pop(); //elimina el ultimo elemento
fruta.shift(); //elimina el primer elemento

fruta.splice(2, 1); // elimina el elemento en la posicion 2, 1 solo apartde de el
console.log(fruta); 
