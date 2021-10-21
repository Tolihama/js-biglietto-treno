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
const age = prompt('Quanti anni hai?');

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
document.writeln(`Prezzo base: ${basePrice}€/km`);
document.writeln("Dati immessi dall'utente");
document.writeln(`- Distanza di viaggio: ${distance}km`);
document.writeln(`- Età: ${age} anni`);
document.writeln('Calcolo prezzo del biglietto');
document.writeln(`- Costo base: ${baseTicketPrice}€`);
if (young === true) {
    document.writeln(`Sconto under 18 (${youngDiscount * 100}%): ${discount}€`);
}
if (old === true) {
    document.writeln(`Sconto over 65 (${oldDiscount * 100}%): ${discount}€`);
}
document.writeln(`- Prezzo finale: ${actualPrice}€`);