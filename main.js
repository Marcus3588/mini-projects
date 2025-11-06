// 1.Click
const likeBtn = document.getElementById('likeBtn');
const likeMsg = document.getElementById('likeMsg');

likeBtn.addEventListener('click', () => {
	likeMsg.textContent = '💘You liked this song!';
})



// 2. Double Click
const albumCover = document.getElementById('albumCover');
const favMsg = document.getElementById('favMsg');

albumCover.addEventListener('dblclick', () => {
	favMsg.textContent = '🌟Added to your favorites!';
})



// 3. MouseOver / MouseOut
const hoverBtn = document.getElementById('hoverBtn');
hoverBtn.addEventListener('mouseover', () => {
	hoverBtn.classList.add('highlight');
	hoverBtn.textContent = 'Thanks for hovering!';
});
hoverBtn.addEventListener('mouseout', () => {
	hoverBtn.classList.remove('highlight');
	hoverBtn.textContent = 'Hover over me!';
});

// 4. KeyDown / KeyUp
const keyInput = document.getElementById('keyInput');
const keyMsg = document.getElementById('keyMsg');
keyInput.addEventListener('keydown', (e) => {
	keyMsg.textContent = `You pressed : ${e.key}`;
});
keyInput.addEventListener('keyup', () => {
	keyMsg.textContent = 'Key released';
})



// 5. Input
const searchBox = document.getElementById('searchBox');
const searchMsg = document.getElementById('searchMsg');
searchBox.addEventListener('input', (e) => {
	searchMsg.textContent = `Searching for: ${e.target.value}`;
});

// 6. Change
const genSelect = document.getElementById('genreSelect');
const genMsg = document.getElementById('genreMsg');
genSelect.addEventListener('change', (e) => {
	genMsg.textContent = `You've selected: ${e.target.value}`;
})


// 7. Submit
const voteForm = document.getElementById('voteForm');
const voteMsg = document.getElementById('voteMsg');
voteForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const artist = document.getElementById('artistName').value;
	voteMsg.textContent = `Vote recorded for ${artist}`;
});


// 8. Scroll
const scrollBox = document.getElementById('scrollBox');
const scrollProgress = document.getElementById('scrollProgress');
scrollBox.addEventListener('scroll', () => {
	const scrollTop = scrollBox.scrollTop;
	const Height = scrollBox.scrollHeight - scrollBox.clientHeight;
	const scrollPercent = (scrollTop / Height) * 100;
	scrollProgress.style.width = scrollPercent + '%';
	scrollProgress.textContent = Math.round(scrollPercent) + '%';
});

// Load
window.addEventListener('load', () => {
	console.log('Page fully loaded');
});

// DomContentLoaded
document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM is ready - all HTML elements are available');
});