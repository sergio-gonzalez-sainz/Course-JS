/*  Una función nos sirve para centrar la lógica de 
    un procedimiento que podemos utilizar varias veces.
    Se sabe que es una función ya que despues del nombre tiene 
    unos paréntesis ().
    Es buena practica que la definición de las funciones estén 
    al principio.
*/

function saludar(nombre){
    console.log('Hola ' + nombre);
}

/*  Función Anónima
*/

const saludar2 = function (nombre){
    console.log('Hola Mundo '+nombre);
}

/*  Funciones flecha
 */
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

/*  Funciones flecha con argumentos.
    Los paréntesis son opcionales, cuando se manda un solo argumento
    no es necesario poner la función de flecha.
 */
const saludarFlecha2 = nombre => {
    console.log('Hola Flecha '+nombre);
}

/*  Llamada de una funcion
*/
saludar( 'Sergio', 40, true, 'Costa Rica');
saludar2( 'Fernando' );

saludarFlecha2('Melissa');



