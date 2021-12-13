
/*
    2C = Two of clubs
    2D = Two of Diaminds
    2H = Two of Hearts 
    2S = Two of Spades
*/

let deck = [];

const crearDeck = () => {
    for (let i = 2; i <= 10 ; i++ ){
        deck.push(i + 'C' )
    }
} 

crearDeck();





