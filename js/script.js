// ----------------------------------
// Variables

var priceCalculatorButton = document.getElementById('btnCalculate');

// ----------------------------------
// Function

priceCalculatorButton.addEventListener ('click', function () {

  // ----------------------------------
  // Variables

  var under18Input = document.getElementById("under18").checked;
  var over65Input = document.getElementById("over65").checked;
  var userDistance = parseInt(document.getElementById("distance").value);
  var finalPriceOutput = document.getElementById('totalToPay');
  var finalPrice;
  
  //___________________________
  // Price multipliers
  var priceMultiplier = 0.21;
  var discountMinor = 0.2;
  var discountOver = 0.4;

  //___________________________
  // Calculate price by distance
  finalPrice = userDistance * priceMultiplier;

  //___________________________
  // Calculate price and print using discount multiplier where needed
  if (under18Input == true) {
    finalPrice -= finalPrice * discountMinor;
    finalPriceOutput.innerHTML = '€' + finalPrice;
  } else if (over65Input == true) {
    finalPrice -= finalPrice * discountOver;
    finalPriceOutput.innerHTML = '€' + finalPrice;
  } else {
    finalPriceOutput.innerHTML = '€' + finalPrice;
  }

  return;
});

