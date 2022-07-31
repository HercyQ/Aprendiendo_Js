const usuarioAutenticador = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado');
    } else {
        reject('No se pudo iniciar sesion');
    }
});

usuarioAutenticador
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

/* En los Promises existen 3 valores

PENDING: No se ha cumplido pero tampoco se ha rechazado
FULFILLED: Ya se cumplio 
REJECT: Se rechazo o no se pudo cumplir */

