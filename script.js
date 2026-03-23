`use strict`;

// Variabili e calcolo biglietto

const prezzo = 0.21;

let km = prompt('Quanti km da percorrere?');
let prezzoKm = prezzo*km;

let age = prompt('Quanti anni hai?');

let scontoMag;
let scontoEld;

if (age < 18) {
    console.log('Sconto minorenni applicato');
    scontoMag = ((prezzoKm*20)/100);
} else {
    scontoMag = 0;
}

if (age >= 65) {
    console.log('Sconto elderly applicato');
    scontoEld = ((prezzoKm*40)/100);
} else {
    scontoEld = 0;
}

let prezzoFinale = prezzoKm - scontoMag - scontoEld;

console.log(`Il tuo biglietto: €${prezzoFinale}`);