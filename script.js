var principal = document.getElementById("principal");
var rate = document.getElementById("rate");
var years = document.getElementById("years");
var interest = principal * years * rate / 100;
var currentyear = new Date().getFullYear();
var result = document.getElementById("result");

function compute()
{
    p = document.getElementById("principal").value;
    result.innerHTML = "If you deposit 1000000, at an interest rate of 3.5%. You will receive an amount of 17500 in the year 2025";
    result.innetHTML = currentyear;
}
function slider_number()
{
    rate.value=document.getElementById("span").value;
    document.getElementById("span").innerHTML=rate.value;
}

