/*  Il programma dovrà chiedere all'utente:*/
// il numero di chilometri che vuole percorrere

const kilometers = prompt('How many kilometers?');

//l'età del passeggero.

const userAge = Number(prompt('How old are you?'));

/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole */

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const price = kilometers * "0.21";

//va applicato uno sconto del 20% per i minorenni
const underageDiscount = "20"

//va applicato uno sconto del 40% per gli over 65.
const seniorDiscount = "40"

/*  Output: massimo due decimali per i centesimi sul prezzo*/
//if statements
if(userAge < 18){
    const underagePrice = ((price / "100") * underageDiscount);
    document.getElementById('final_price').innerHTML = (((price - underagePrice).toFixed(2)) + " €");
} else if (userAge >= 65){
    const seniorPrice = ((price / "100") * seniorDiscount)
    document.getElementById('final_price').innerHTML = (((price - seniorPrice)).toFixed(2) + " €");
} else{
    document.getElementById('final_price').innerHTML = (price + " €");
}
