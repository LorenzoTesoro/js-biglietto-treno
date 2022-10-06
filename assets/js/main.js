/*  Il programma dovrà chiedere all'utente:*/
// il numero di chilometri che vuole percorrere

const kilometers = Number(prompt('How many kilometers?'));

//l'età del passeggero.

const userAge = Number(prompt('How old are you?'));

/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole */

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let price = Number(kilometers * 0.21);

//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
/*  Output: massimo due decimali per i centesimi sul prezzo*/
//if statements

if(userAge < 18){
    price = Number(price - (price / "100") * 20).toFixed(2);
} else if (userAge >= 65){
    price = Number(price - (price / "100") * 40).toFixed(2);
}

document.getElementById('final_price').innerHTML = price + " €";