// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi, l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Passaggi:
// (1) Esce l'alert coi numeri da memorizzare;
// (2) L'utente cerca di memorizzare i numeri;
// (3) L'utente chiude l'alert;
// (4) L'utente per 30 secondi aspetta per ricordarsi i numeri;
// (5) L'utente prova ad inserire, uno alla volta, tutti e 5 i numeri.


var numeriRandom =[];


// Metodo con il while per generare i numeri con comando per non generare doppioni.
while (numeriRandom.length < 5){
  var n = generaNumeriRandom(1, 50);
  if (numeriRandom.includes(n) == false){
    numeriRandom.push(n);
  }
  // console.log(numeriRandom);
}

// Metodo con il for per generare i numeri. Potrebbero spuntare gli stessi numeri.
// for (var i = 0; i < 5; i++) {
//   var n = generaNumeriRandom(1, 50);
//   numeriRandom.push(n);
// }

alert('I numeri generati sono: ' + numeriRandom);

// Se tutto funziona, cambiare alla fine dell'esercizio i secondi.
setTimeout(indovinaNumeri, 3000);

var numeriUtente = [];
var risultato = [];

function indovinaNumeri(){
  // Metodo con while
  while (numeriUtente.length < 5) {
    var numeroInserito = parseInt(prompt('Prova ad indovinare i 5 numeri generati dal computer. Inserisci dei numeri compresi tra 1 e 50:'));
    if(numeroInserito < 1 || numeroInserito > 50){
      alert('Hai inserito un numero non compreso tra 1 e 50.');
    } else if (numeriUtente.includes(numeroInserito) == false){
      numeriUtente.push(numeroInserito);
    } else {
      alert('Hai inserito un numero uguale');
    }
    // Fase di controllo dei numeri

    if (numeriRandom.includes(numeroInserito)) {
      risultato.push(numeroInserito);
    }
  }
  console.log(numeriUtente);

  console.log(risultato);
  // Metodo con for
  // for (var i = 0; i < 5; i++) {
  //   var numeroInserito = parseInt(prompt('Prova ad indovinare i 5 numeri generati dal computer. Inserisci dei numeri compresi tra 1 e 50:'));
  //   numeriUtente.push(numeroInserito);
  // }


}








// Funzioni riutilizzabili
function generaNumeriRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
