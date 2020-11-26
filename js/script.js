$(document).ready(
  function () {
    var randomNumbers = [];

    var numeriRicordati = [];

    i=0

    while(randomNumbers.length < 5){
      var random = Math.floor(Math.random()*5);
      if(randomNumbers.includes(random)){
        console.log("il numero generato esiste già");
      }else {

        randomNumbers.push(random);
      }
      i++
    }
    alert(randomNumbers)

    var tempo = 2;

    var countdown = setInterval(function() {

      tempo -= 1;

      if (tempo < 0) {
        clearInterval(countdown);
        for(i=0;i<5;i++){
          var numeriUtente = parseInt(prompt("inserisci numeri "));
          numeriRicordati.push(numeriUtente);
          console.log(numeriRicordati);
          var punteggio = 0;

          var numeriCorretti = [];
          console.log("debug");
          for(j = 0; j < randomNumbers.length;j++){
            if(numeriRicordati.includes(randomNumbers[j])){
              punteggio += 1;
              numeriCorretti.push(randomNumbers[j]);
            }else {
              console.log("hai sbagliato");
            }
            console.log("punteggio ", punteggio);
            console.log("numeri corretti ", numeriCorretti);
          }

        }

      }else {
        console.log("30");
      }
    },1000)

  }
);
