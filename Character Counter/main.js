const input = document.getElementById("textInput");
const charCount = document.getElementById("charCount")
const warning = document.getElementById("warning-message")

input.addEventListener("input", () => {
	const length = input.value.length;
	charCount.textContent = `${length} / 150`

	if(length >=150) {
		warning.classList.remove("hidden")
	} else {
		warning.classList.add("hidden")
	}
})

