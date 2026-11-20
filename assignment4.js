// ASSUMPTIONS: change these to match the rules from your instructor.
var REGULAR_HOURS = 40;      // hours per week paid at the normal rate
var OVERTIME_MULT = 1.25;    // overtime pay = 125% of the hourly rate
var SSS_RATE = 0.045;        // 4.5% of gross pay
var PHILHEALTH_RATE = 0.025; // 2.5% of gross pay
var PAGIBIG_RATE = 0.02;     // 2% of gross pay...
var PAGIBIG_MAX = 200;       // ...but never more than 200

// Formats a number as money, like PHP 1,234.50
function money(amount) {
  return "PHP " + amount.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function computePayroll() {
  document.getElementById("error").innerHTML = "";
  document.getElementById("payslip").style.display = "none";

  // 1. Read the inputs
  var name = document.getElementById("name").value;
  var hours = parseFloat(document.getElementById("hours").value);
  var rate = parseFloat(document.getElementById("rate").value);

  // 2. Check them
  if (name.trim() === "") {
    document.getElementById("error").innerHTML = "Please enter the employee's name.";
    return;
  }
  if (isNaN(hours) || hours < 0 || isNaN(rate) || rate <= 0) {
    document.getElementById("error").innerHTML = "Please enter valid hours (0 or more) and a pay rate above 0.";
    return;
  }

  // 3. Split the hours into regular and overtime
  var regularHours = hours;
  var overtimeHours = 0;
  if (hours > REGULAR_HOURS) {
    regularHours = REGULAR_HOURS;
    overtimeHours = hours - REGULAR_HOURS;
  }

  // 4. Compute the pay
  var regularPay = regularHours * rate;
  var overtimePay = overtimeHours * rate * OVERTIME_MULT;
  var grossPay = regularPay + overtimePay;

  // 5. Compute the deductions
  var sss = grossPay * SSS_RATE;
  var philhealth = grossPay * PHILHEALTH_RATE;
  var pagibig = grossPay * PAGIBIG_RATE;
  if (pagibig > PAGIBIG_MAX) {
    pagibig = PAGIBIG_MAX;
  }
  var totalDeductions = sss + philhealth + pagibig;

  // 6. Net pay = what the employee takes home
  var netPay = grossPay - totalDeductions;

  // 7. Show the payslip
  var html = "<h2>Payslip: " + name + "</h2><table>" +
    "<tr><td>Regular pay (" + regularHours + " hrs)</td><td>" + money(regularPay) + "</td></tr>" +
    "<tr><td>Overtime pay (" + overtimeHours + " hrs)</td><td>" + money(overtimePay) + "</td></tr>" +
    "<tr><td><strong>Gross pay</strong></td><td><strong>" + money(grossPay) + "</strong></td></tr>" +
    "<tr><td>SSS</td><td>- " + money(sss) + "</td></tr>" +
    "<tr><td>PhilHealth</td><td>- " + money(philhealth) + "</td></tr>" +
    "<tr><td>Pag-IBIG</td><td>- " + money(pagibig) + "</td></tr>" +
    "<tr><td><strong>Total deductions</strong></td><td><strong>- " + money(totalDeductions) + "</strong></td></tr>" +
    "<tr class='total'><td>NET PAY</td><td>" + money(netPay) + "</td></tr>" +
    "</table>";
  var payslip = document.getElementById("payslip");
  payslip.innerHTML = html;
  payslip.style.display = "block";
}
