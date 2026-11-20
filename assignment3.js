function calculate() {
  document.getElementById("error").innerHTML = "";
  document.getElementById("factorialResult").innerHTML = "";
  document.getElementById("sumResult").innerHTML = "";
  document.getElementById("averageResult").innerHTML = "";

  var text = document.getElementById("n").value;
  var n = parseFloat(text);
  if (text === "" || isNaN(n) || n < 1 || n !== Math.floor(n)) {
    document.getElementById("error").innerHTML = "Please enter a whole number that is 1 or higher.";
    return;
  }

  if (n <= 20) {
    var factorial = 1;
    var i = 1;
    while (i <= n) {
      factorial = factorial * i;
      i = i + 1;
    }
    document.getElementById("factorialResult").innerHTML =
      "Factorial of " + n + " = " + factorial.toLocaleString();
  } else {
    document.getElementById("factorialResult").innerHTML =
      "Factorial: N is too big to show exactly (use 20 or less).";
  }

  var sum = 0;
  var j = 1;
  do {
    sum = sum + j;
    j = j + 1;
  } while (j <= n);
  document.getElementById("sumResult").innerHTML =
    "Sum of the first " + n + " natural numbers = " + sum.toLocaleString();

  var total = 0;
  for (var k = 1; k <= n; k++) {
    total = total + k;
  }
  var average = total / n;
  document.getElementById("averageResult").innerHTML =
    "Average of the first " + n + " natural numbers = " + average.toFixed(2);
}
