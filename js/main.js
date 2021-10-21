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
const youngDiscount = 20%; // if age < 18
const oldDiscount = 40%; // if age > 65

// User Input
const distance = prompt('Quanti chilometri vuoi percorrere?');
const age = prompt('Quanti anni hai?');

// Ticket price calc without discounts

// Evaluate discount in special cases

// Output
