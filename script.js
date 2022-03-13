/* The compute function runs the formula for computing the interest when the compute button is clicked. */
function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseFloat(document.getElementById("years").value);
    var result = principal * years * rate /100;
    var years_modified = new Date().getFullYear() + parseInt(years);

	/* This getElementById() method sets the text that is to be displayed after the Compute Interest button is clicked. The <mark> tag is used to highlight the numbers in the result.  */
	document.getElementById("result").innerHTML = "If you deposit <mark>"
   + principal + "</mark>, <br/> at an interest rate of <mark>"
   + rate +"%.</mark><br/> You will receive an amount of <mark>" + result +
   "</mark>,<br/>in the year <mark>" + years_modified + ".</mark><br/>";
}

/*
The updateRate() function controls the number displayed when the scroller is adjusted. */
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

/* The checkAmount() function is used to check that the number entered in the Amount (principal) field is not 0 or a negative number. */
function checkAmount() 
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) 
    {
        alert("Enter a non-zero or a positive number");
        document.getElementById("principal").focus();
    }
}