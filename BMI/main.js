const form = document.getElementById('bmiForm');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const weightUnitSelect = document.getElementById('weightUnit');
const heightUnitSelect = document.getElementById('heightUnit');
const resultDiv = document.getElementById('result');
const bmiValue = document.getElementById('bmiValue');
const bmiStatus = document.getElementById('bmiStatus');
const resetBtn = document.getElementById('resetBtn');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	const weight = parseFloat(weightInput.value);
	const height = parseFloat(heightInput.value);

	if (weightUnitSelect.value === 'Pounds') {
		weight = weight * 0.453592; // Convert pounds to kg
	}
	if (heightUnitSelect.value === 'Inches') {
		height = height * 0.0254; // Convert inches to meters
	}
	const heightMeters = height / 100; // Convert cm to meters if needed
	const bmi = weight / (heightMeters * heightMeters);
	
	bmiValue.textContent = bmi.toFixed(2);
	bmiStatus.textContent = getBmiStatus(bmi);
	resultDiv.classList.remove('hidden');
});

resetBtn.addEventListener('click', function() {
	form.reset();
	resultDiv.classList.add('hidden');
});

function getBmiStatus(bmi) {
	if (bmi < 18.5) {
		return 'Underweight';
	} else if (bmi >= 18.5 && bmi < 24.9) {
		return 'Normal weight';
	} else if (bmi >= 25 && bmi < 29.9) {
		return 'Overweight';
	} else {
		return 'Obesity';
	}
}
