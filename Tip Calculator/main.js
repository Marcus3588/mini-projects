document.getElementById("tipForm").addEventListener("submit", function(e) {
	e.preventDefault();

	const bill = parseFloat(document.getElementById("billAmount").value);
	const tipRate = parseFloat(document.getElementById("serviceQuality").value);
	const people = parseInt(document.getElementById("numPeople").value);

	const resultDiv = document.getElementById("results");
	const totalTipSpan = document.getElementById("totalTip");
	const tipPerPersonSpan = document.getElementById("tipPerPerson");
	const totalPerPersonSpan = document.getElementById("totalPerPerson");

	if (isNaN(bill) || bill <= 0 || isNaN(tipRate) || isNaN(people) || people <=0 ) {
		resultDiv.classList.add("hidden");
		alert("Please enter valid values for all fields.");
		return;
	}

	const tipAmount = bill * tipRate;
	const totalAmount = bill + tipAmount;
	const tipPerPerson = tipAmount / people;
	const totalPerPerson = totalAmount / people;

	totalTipSpan.textContent = tipAmount.toFixed(2);
	tipPerPersonSpan.textContent = tipPerPerson.toFixed(2);
	totalPerPersonSpan.textContent = totalPerPerson.toFixed(2);

	resultDiv.classList.remove("hidden");
})