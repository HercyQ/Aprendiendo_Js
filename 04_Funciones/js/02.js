//Metodos de propiedad
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`);
    },

    pausar: function () {
        console.log('Pausando...');
    },
    crearPlaylist: function() {
        console.log(`Creando la playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la cancion: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');