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


  var controllo;
  if () {

  }


for (var i = 0; i < 5; i++) {
  var n = generaNumeriRandom(1, 50);
  numeriRandom.push(n);
}

alert('I numeri generati sono: ' + numeriRandom);





// Funzioni riutilizzabili
function generaNumeriRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
