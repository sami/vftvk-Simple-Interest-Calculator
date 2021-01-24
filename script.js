function compute()
{
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);
    let currentYear = new Date().getFullYear();
    let endYear = currentYear + years;
    let result = (principal * rate * years) / 100

    document.getElementById("result").innerHTML =
        "            If you deposit <mark>" + principal + "</mark>,<br>\n" +
        "            at an interest rate of <mark>" + rate + "%</mark>.<br>\n" +
        "            You will receive an amount of <mark>" + result + "</mark>,<br>\n" +
        "            in the year <mark>" + endYear + "</mark>";
}

function rangeDisplay() {
    document.getElementById("range-number").innerHTML = document.getElementById("rate").value + "%";
}
        