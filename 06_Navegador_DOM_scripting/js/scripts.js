//querySelector
const heading = document.querySelector('.header__texto h2');// 0 o 1 elemento
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'NOSOTROS';//Modificando el texto
enlaces[0].classList.add('nueva-clase');//agregando una clase
//enlaces[0].classList.remove('navegacion__enlace'); //eliminar una clase

//getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');
//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar el texto
nuevoEnlace.textContent = 'Suscribete';
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//EVENTOS
console.log(1);

window.addEventListener('load', imprimir);

window.onload = () => {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function () {// Solo espera por el HTML, pero no espera CSS o imagenes
    console.log(4);
});

console.log(5);

function imprimir() {
    console.log(2);
}

window.onscroll = function () {
    console.log('scrolling...');
}

//Seleccionar elementos y asociarles un evento
/* const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function (evento) {
    console.log(evento);
    evento.preventDefault();
    //validar formulario
    console.log('enviando formulario');
}); */

//Eventos de los Inputs y Textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

//El evento de Submit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submite', function (evento) {
    evento.preventDefault();

    console.log('Enviando Formulario');
});