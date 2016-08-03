

//Create a function that will be called when the user clicks on the BUTTON element you added to your HTML
//Function should grab the values entered by the user from the INPUT element and the SELECT element

$("#bttnClick").click(function(){
	var loanBalance = $("#loanBal").val();
	var loanTerm = $("#term").val();
	var apr = $("#apr").val();
	var period = $("#period option:selected").val();

	var numberOfPayment = loanTerm * period;
	var monthlyInterestRate = (apr / 100) / period;
	var compoundedInterest = Math.pow((1 + monthlyInterestRate), numberOfPayment);
	var interestQ = (monthlyInterestRate * compoundedInterest) / (compoundedInterest - 1);
	var monthlyPayment = Math.round((loanBalance * interestQ) * 100) / 100;
	monthlyPayment.toFixed("2");

	var message = $("#results").text("Your payments will be $" + monthlyPayment).append();
});

// Make sure they input a correct value
