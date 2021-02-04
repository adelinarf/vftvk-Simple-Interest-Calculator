function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("numberofyears").value;
    var interest = principal * years * rate / 100;
    var currentyear = new Date().getFullYear();   // Th
    var result = document.getElementById("result");
    var futureyear = currentyear + Number(years);
    /* The variable principal, rate and years get the value input by the user from
    the DOM tree to be used to the calculation of the future year and the interest    
    */
    if (principal < 0 || principal==0 || principal == "") {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        // If the user insert 0, a negative number or any number, this sets an alert and focus on the amount input field 
        return false;
    } else {
        // If the user inputs a correct amount, the function outputs this message with the calculations done before
        document.getElementById("result").innerHTML = `If you deposit <mark> ${principal}</mark>,<br> at an interest rate of <mark> ${rate}%</mark>.<br> You will receive an amount of <mark> ${interest}</mark><br> in the year <mark> ${futureyear}</mark>`;
    }

}
function slider_number(val)
{
    document.getElementById("span").innerHTML=val+"%"; // When the user slides the rate slider, it changes the span value dinamically 
}

