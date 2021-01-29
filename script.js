var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate / 100;
var currentyear = new Date().getFullYear();
var result = document.getElementById("result");
var futureyear2 = (years) + (years);

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var currentyear = new Date().getFullYear();
    var result = document.getElementById("result");
    var futureyear = currentyear + Number(years);
    document.getElementById("result").innerHTML = `If you deposit ${principal}, at an interest rate of ${rate}%. You will receive an amount of ${interest} in the year ${futureyear}`;
}
function slider_number(val)
{
    document.getElementById("span").innerHTML=val;

}

