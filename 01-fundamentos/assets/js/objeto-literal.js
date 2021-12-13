
/*  Cuando tengan llaves significa un
    objeto.
    Lo que esta adentro del objeto se le llama "Propiedades".
    No hay un límite de propiedades que se pueden tener.
    Cuando se imprimen las propiedades en la consola del navegador
    se imprimen por orden alfabetico.
 */

let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: [
        'Mark I',
        'Mark V',
        'Hulkbuster'],
    direccion: {
        zip:'10880, 90265',
        ubicacion: 'Malibu , California',
    },
    ultima_pelicula: 'Infinity War',
};

console.log('Nombre:', personaje.nombre);
console.log(personaje);
/*  Tambien podemos acceder a las propiedades del objeto atraves de
    un corchete.
 */
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Coord:', personaje.coords.lat );
console.log('No Trajes:', personaje.trajes.length)
console.log('Ultimo Traje:', personaje.trajes[personaje.trajes.length-1]);

/*  Esto hace referencia a la propiedad del objeto a traves de una
    variable.
*/
const x = 'vivo';

console.log('Vivo:', personaje[x] );
console.log('Ultima Película:', personaje['ultima_pelicula']);






