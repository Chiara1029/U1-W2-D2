/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 5
const num2 = 10
if(num1 > num2){
  console.log("Questo è il numero più grande: ", num1)
} else {
  console.log("Questo è il numero più grande: ", num2)
}
//OPPURE
const maxNum = num1 > num2 ? num1 : num2;
console.log("Il numero più grande è: ", maxNum)


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if(num2 !== 5){console.log("not equal")}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if(num2 / 5){
  console.log("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let a=4
let b=12
if( a === 8) {
  console.log("La variabile a è uguale a 8")
} else if (b === 8){
  console.log("La variabile b è uguale a 8")
} else if (b - a){
  console.log("La sottrazione delle variabili è uguale a 8")
} else {
  console.log("Hai sbagliato tutto.")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 56
let shippingCosts = totalShoppingCart > 50 ? 0 : 10
console.log("Il totale è di: ", totalShoppingCart + shippingCosts)
//OPPURE
const totalShoppingCart2 = 49
let shippingCosts2 = totalShoppingCart2 > 50 ? 0 : 10
console.log("Il totale è di: ", totalShoppingCart2 + shippingCosts2)


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. 
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione 
  nell'algoritmo, determinando come prima se le spedizioni sono 
  gratuite oppure no e e calcolando il totale.
*/

const discount = 0.2
const totalDiscountedShoppingCart = totalShoppingCart-totalShoppingCart*discount
shippingCosts = totalDiscountedShoppingCart > 50 ? 0 : 10
console.log("Il totale è di: ", totalDiscountedShoppingCart + shippingCosts)


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let primaVar = 6
let secondaVar = 3
let terzaVar = 9
if(primaVar>secondaVar){
  console.log("Il primo numero è: ", secondaVar)
} else if(secondaVar<primaVar){
  console.log("Il secondo numero è: ", primaVar)
} else if(terzaVar>secondaVar){
  console.log("Il terzo numero è: ", terzaVar)
} else {
  console.log("l'esercizio è sbagliato")
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let esempioType = "ciao"
console.log(typeof esempioType)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numeroDispari = 7
let pariDispari = 7 % 2
if(pariDispari===0){
  console.log("Il numero è pari")
} else {
  console.log("Il numero è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
  if (val < 10) {
      console.log("Meno di 10")
    } else if (val > 5) {
      console.log("Meno di 5")
    } else {
      console.log("Uguale a 10 o maggiore")
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}


me.city = "Toronto"

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const esArray = [[]]
esArray.push([1])
esArray.push([2])
esArray.push([3])
esArray.push([4])
esArray.push([5])
esArray.push([6])
esArray.push([7])
esArray.push([8])
esArray.push([9])
esArray.push([10])
esArray.shift()

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

esArray.pop()
esArray.push([100])
