/*
 * Price Ticket Calculator
 */

/* 
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// Program Input (problem data)
const basePrice = 0.21; // each km
const youngDiscount = 0.2; // if age < 18
const oldDiscount = 0.4; // if age > 65

// User Input
const distance = prompt('Quanti chilometri vuoi percorrere?');
document.getElementById('distance').innerHTML = `Distanza di viaggio: ${distance} km`;
const age = prompt('Quanti anni hai?');
document.getElementById('age').innerHTML = `Età: ${age} anni`;

// Input check?

// Ticket price calc without discounts
let baseTicketPrice = distance * basePrice;

// Evaluate discount in special cases
let discount = 0;
let young = false;
let old = false;

if (age < 18) {
    discount = baseTicketPrice * youngDiscount;
    young = true;
} 
if (age > 65) {
    discount = baseTicketPrice * oldDiscount;
    old = true;
} 

let actualPrice = baseTicketPrice - discount;

// Output
baseTicketPrice = baseTicketPrice.toFixed(2);
actualPrice = actualPrice.toFixed(2);
discount = discount.toFixed(2);
document.getElementById('baseTicketPrice').innerHTML = `Costo base: ${baseTicketPrice} €`;
if (young === true) {
    document.getElementById('discount').innerHTML = `Sconto under 18 ( -${youngDiscount * 100}% ): ${discount} €`;
}
if (old === true) {
    document.getElementById('discount').innerHTML = `Sconto over 65 ( -${oldDiscount * 100}% ): ${discount} €`;
}
document.getElementById('actualPrice').innerHTML = `Prezzo finale: ${actualPrice} €`;