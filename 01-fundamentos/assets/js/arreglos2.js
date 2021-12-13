/*  Métodos y propiedades de los arreglos 
*/

let juegos = ['Juego 1', 'Juego 2', 'Juego 3', 'Juego 4'];

console.log('Largo:', juegos.length);

let primero = juegos[0];

let ultimo = juegos[juegos.length -1 ];

console.log(ultimo);

/*  Cómo se pueden barrer los elementos de un arreglo 
    Esto va a recorrer todos los elementos del arreglo. 
*/

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
} );

/*  Para agregar un nuevo elemento a un arreglo se utiliza el 
    método push. Este método coloca el elemento al final.
    El método es una función que se va a ejecutar cuando nosotros la 
    llamamos. 
 */

let nuevaLongitud = juegos.push('Soy el Final');

console.log({nuevaLongitud, juegos});

/*  Para agregar un elemento al final ocupamos el método unshift.
 */
nuevaLongitud = juegos.unshift('WW');

console.log({nuevaLongitud, juegos});

/*  Para borrar el último elemento del arreglo se utiliza el método 
    Pop.
 */

let final = juegos.pop();

console.log({final, juegos});


let posicion = 1;

console.log(juegos);

let juegosBorrados = juegos.slice(posicion, 2);

console.log({juegosBorrados, juegos});

/*  Te devuelve el indice de la posición del elemento en el arreglo.  
*/
let metroidIndex = juegos.indexOf('Juego 3');

console.log({metroidIndex});

//Referencia


