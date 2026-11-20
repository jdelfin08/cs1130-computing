function readNumber(id) {
  var text = document.getElementById(id).value;
  if (text === "") { return null; }
  return parseFloat(text);
}

function show(id, message) {
  document.getElementById(id).innerHTML = message;
}

function celsiusToFahrenheit() {
  var c = readNumber("c2f");
  if (c === null) { show("c2fResult", "Please enter a number."); return; }
  var f = c * 9 / 5 + 32;
  show("c2fResult", c + " °C = " + f.toFixed(2) + " °F");
}

function fahrenheitToCelsius() {
  var f = readNumber("f2c");
  if (f === null) { show("f2cResult", "Please enter a number."); return; }
  var c = (f - 32) * 5 / 9;
  show("f2cResult", f + " °F = " + c.toFixed(2) + " °C");
}

function metersToFeet() {
  var m = readNumber("m2f");
  if (m === null) { show("m2fResult", "Please enter a number."); return; }
  var ft = m * 3.28084;
  show("m2fResult", m + " m = " + ft.toFixed(2) + " ft");
}

function feetToMeters() {
  var ft = readNumber("f2m");
  if (ft === null) { show("f2mResult", "Please enter a number."); return; }
  var m = ft / 3.28084;
  show("f2mResult", ft + " ft = " + m.toFixed(2) + " m");
}
