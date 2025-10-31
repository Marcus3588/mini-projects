const form = document.getElementById('tempForm');
const result = document.getElementById('conversionResult');
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('resetBtn');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	const temp = parseFloat(document.getElementById('temperature').value);
	const fromUnit = document.getElementById('fromUnit').value;
	const toUnit = document.getElementById('toUnit').value;

	if (isNaN(temp)) {
		result.textContent = 'Please enter a valid number.';
		resultDiv.classList.remove('hidden');
		return;
	}
	let convertedTemp;
	if (fromUnit === toUnit) {
		convertedTemp = temp;
	} else {
		switch (fromUnit) {
			case 'Celsius':
				if(toUnit === 'Fahrenheit') convertedTemp = (temp * 9/5) + 32;
				if(toUnit === 'Kelvin') convertedTemp = temp + 273.15;
					break;

			case 'Fahrenheit':
				if(toUnit === 'Celsius') convertedTemp = (temp - 32) * 5/9;
				if(toUnit === 'Kelvin') convertedTemp = (temp - 32) * 5/9 + 273.15;
					break;
			case 'Kelvin':
				if(toUnit === 'Celsius') convertedTemp = temp - 273.15;
				if(toUnit === 'Fahrenheit') convertedTemp = (temp - 273.15) * 9/5 + 32;
					break;
			}
		}
		result.textContent = `${temp.toFixed(2)}° ${fromUnit} = ${convertedTemp.toFixed(2)}° ${toUnit}`;
		resultDiv.classList.remove('hidden');
	});

resetBtn.addEventListener('click', function() {
	form.reset();
	resultDiv.classList.add('hidden');
	})