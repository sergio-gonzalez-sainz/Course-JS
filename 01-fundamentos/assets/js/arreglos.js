

/*Primera Forma de crear un arreglo */
const arr = new Array(10);

console.log(arr);

/*Segunda Forma de crear un arreglo */

const  array = [];


let videoJuegos =[ 'Mario 3', 'Megaman', 'Chrono Trigger'  ];

console.log({videoJuegos});

console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Sergio',
    1+5,
    function(){},
    () =>{},
    {a:1},
    ['X','Megaman','Zero','Dr.Ligth',[
        'Dr.Willy',
        'Woodman'
    ]]
];
/*Acceder a arreglos multidimencionales */
console.log(arregloCosas[7][4][1]);