function calcoloPrezzoTotale() {
  var under18 = document.getElementById("under18").checked;
  var over65 = document.getElementById("over65").checked;

  userDistance = parseInt(document.getElementById("distance").value);
  console.log(userDistance);
  priceMultiplier = 0.21;
  prezzoDistanza = userDistance * priceMultiplier;

  // Sconti
  scontoStudenti = prezzoDistanza * 0.2;
  scontoPensionati = prezzoDistanza * 0.4;

  // Controllo prezzoDistanza
  console.log(prezzoDistanza);

  // Prezzi scontati
  prezzoTotaleStudenti = prezzoDistanza - scontoStudenti;
  prezzoTotalePensionati = prezzoDistanza - scontoPensionati;

  // Controllo prezzi
  console.log("Controllo prezzi in numeri");
  console.log(prezzoDistanza);
  console.log(prezzoTotaleStudenti);
  console.log(prezzoTotalePensionati);

  // .toFixed
  prezzoDistanza = prezzoDistanza.toFixed(2);
  prezzoTotaleStudenti = prezzoTotaleStudenti.toFixed(2);
  prezzoTotalePensionati = prezzoTotalePensionati.toFixed(2);

  if (under18 == true) {
    document.getElementById("totalToPay").innerHTML =
      "€" + prezzoTotaleStudenti;
  } else if (over65 == true) {
    document.getElementById("totalToPay").innerHTML =
      "€" + prezzoTotalePensionati;
  } else {
    document.getElementById("totalToPay").innerHTML = "€" + prezzoDistanza;
  }

  // Controllo prezzi
  console.log("Controllo prezzi in forma umana");
  console.log(prezzoDistanza);
  console.log(prezzoTotaleStudenti);
  console.log(prezzoTotalePensionati);

  return;
}
