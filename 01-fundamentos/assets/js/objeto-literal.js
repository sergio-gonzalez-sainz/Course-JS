
/*  Cuando tengan llaves significa un
    objeto.
    Lo que esta adentro del objeto se le llama "Propiedades".
    No hay un límite de propiedades que se pueden tener.
    Cuando se imprimen las propiedades en la consola del navegador
    se imprimen por orden alfabetico.
 */

/*  Al inicializar un objeto como const lo que no estamos 
    permitiendo es que se pueda mutar el "personajes", es decir, 
    inicializar "personje" como un string, un entero, una contante
    un booleano, un arreglo, etc.
    Pero Sí permite modificar o agregar propiedades al objeto. 
 */
const personaje = {
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

//Más detalles

/*  Para borrar una propieda de un objeto se ocupa 
    la palabra reservada delete.
*/
delete personaje.edad ;
console.log(personaje);

personaje.casado = true;

/*  entries: Permite ver el objeto como arreglos
*/
const entriPares = Object.entries(personaje);
console.log( entriPares );

console.log(personaje);

/*  Para hacer un bloqueo de la modificación de las propiedades
    existentes del objeto.Pero no a los objeto dentro de los objetos.
    Se utiliza freeze.
*/
Object.freeze(personaje);

personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje)

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades,valores);








