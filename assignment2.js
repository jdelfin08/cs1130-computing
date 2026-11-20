function money(amount) {
  return "PHP " + amount.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function computeTax() {
  document.getElementById("error").innerHTML = "";
  document.getElementById("resultBox").style.display = "none";

  var text = document.getElementById("income").value;
  var income = parseFloat(text);
  if (text === "" || isNaN(income) || income < 0) {
    document.getElementById("error").innerHTML = "Please enter an income of 0 or more.";
    return;
  }

  var tax = 0;
  var bracket = "";
  if (income <= 250000) {
    tax = 0;
    bracket = "Up to 250,000 (0%)";
  } else if (income <= 400000) {
    tax = (income - 250000) * 0.15;
    bracket = "250,001 to 400,000 (15%)";
  } else if (income <= 800000) {
    tax = 22500 + (income - 400000) * 0.20;
    bracket = "400,001 to 800,000 (20%)";
  } else if (income <= 2000000) {
    tax = 102500 + (income - 800000) * 0.25;
    bracket = "800,001 to 2,000,000 (25%)";
  } else if (income <= 8000000) {
    tax = 402500 + (income - 2000000) * 0.30;
    bracket = "2,000,001 to 8,000,000 (30%)";
  } else {
    tax = 2202500 + (income - 8000000) * 0.35;
    bracket = "Over 8,000,000 (35%)";
  }

  var afterTax = income - tax;
  var effectiveRate = 0;
  if (income > 0) {
    effectiveRate = tax / income * 100;
  }

  var html = "<h2>Result</h2><table>" +
    "<tr><td>Annual taxable income</td><td>" + money(income) + "</td></tr>" +
    "<tr><td>Tax bracket</td><td>" + bracket + "</td></tr>" +
    "<tr><td>Effective tax rate</td><td>" + effectiveRate.toFixed(2) + "%</td></tr>" +
    "<tr><td>Income after tax</td><td>" + money(afterTax) + "</td></tr>" +
    "<tr class='total'><td>Income tax due</td><td>" + money(tax) + "</td></tr>" +
    "</table>";
  var box = document.getElementById("resultBox");
  box.innerHTML = html;
  box.style.display = "block";
}
