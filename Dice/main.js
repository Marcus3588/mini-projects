const rollBtn = document.getElementById('rollBtn');
const dice = document.getElementById('dice');


const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
rollBtn.addEventListener('click', () => {
	dice.classList.remove('rolling');

	void dice.offsetWidth;

	dice.classList.add('rolling');

	setTimeout(() => {
		const dice = Math.floor(Math.random() * 6);
		dice.textContent = diceFaces[dice];
	},600);

});