function compute()
{
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);
    let interest = principal * years * rate / 100;
    let currentYear = new Date().getFullYear();
    let futureYear = currentYear + years - 1;

    if (isNaN(principal) || principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML =
            "            If you deposit <mark>" + principal + "</mark>,<br>\n" +
            "            at an interest rate of <mark>" + rate + "%</mark>.<br>\n" +
            "            You will receive an amount of <mark>" + interest + "</mark>,<br>\n" +
            "            in the year <mark>" + futureYear + "</mark>";
    }
}

function rangeDisplay() {
    document.getElementById("range-number").innerHTML = document.getElementById("rate").value + "%";
}
        