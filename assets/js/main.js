/*  Il programma dovrà chiedere all'utente:*/

// il numero di chilometri che vuole percorrere

const kilometers = prompt('How many kilometers?');

//l'età del passeggero.

const userAge = prompt('How old are you?');

/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole */
const price = kilometers * "0.21";

console.log(price);
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

//va applicato uno sconto del 20% per i minorenni

//va applicato uno sconto del 40% per gli over 65.


/*  Output: massimo due decimali per i centesimi sul prezzo*/