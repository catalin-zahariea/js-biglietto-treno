function calcoloPrezzoTotale() {
  var under18 = document.getElementById("under18").checked;
  var over65 = document.getElementById("over65").checked;

  userDistance = parseInt(document.getElementById("distance").value);
  console.log(userDistance);
  priceMultiplier = 0.21;
  prezzoDistanza = userDistance * priceMultiplier;

  scontoStudenti = prezzoDistanza * 0.2;
  scontoPensionati = prezzoDistanza * 0.4;

  prezzoDistanza.toFixed(2);

  if (under18 == true) {
    document.getElementById("totalToPay").innerHTML =
      "€" + [prezzoDistanza - scontoStudenti.toFixed(2)];
  } else if (over65 == true) {
    document.getElementById("totalToPay").innerHTML =
      "€" + [prezzoDistanza - scontoPensionati.toFixed(2)];
  } else {
    document.getElementById("totalToPay").innerHTML = "€" + prezzoDistanza;
  }
  return;
}
