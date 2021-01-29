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
    if (principal == "") {
        alert("Please fill field")
        document.getElementById("principal").focus();
        return false;
    } else if(principal < 0 || principal==0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    } else {
        document.getElementById("result").innerHTML = `If you deposit ${principal}, at an interest rate of ${rate}%. You will receive an amount of ${interest} in the year ${futureyear}`;
    }

}
function slider_number(val)
{
    document.getElementById("span").innerHTML=val;

}

