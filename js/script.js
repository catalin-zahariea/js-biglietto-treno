function calcoloPrezzoTotale() {
  var under18 = document.getElementById("under18").checked;
  var over65 = document.getElementById("over65").checked;

  userDistance = parseInt(document.getElementById("distance").value);
  console.log(userDistance);
  priceMultiplier = 0.21;
  prezzoDistanza = userDistance * priceMultiplier;
  prezzoDistanza.toFixed(2);

  scontoStudenti = prezzoDistanza * 0.2;
  scontoPensionati = prezzoDistanza * 0.4;

  if (under18 == true) {
    document.getElementById("totaleDaPagare").innerHTML =
      "€" + [prezzoDistanza - scontoStudenti];
  } else if (over65 == true) {
    document.getElementById("totaleDaPagare").innerHTML =
      "€" + [prezzoDistanza - scontoPensionati];
  } else {
    document.getElementById("totaleDaPagare").innerHTML = "€" + prezzoDistanza;
  }
  return;
}
