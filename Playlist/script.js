const list = document.getElementById('list');
list.addEventListener('click' , (e) => {
	if(e.target.matches('song')) {
		alert(e.target.textContent);
	}
})

const btn = document.getElementById('addSong');
btn.addEventListener('click' , () => {
	const newSong = document.createElement('li')
	newSong.className = 'song';
	newSong.textContent = `Song ${list.children.length + 1}`;
	list.appendChild(newSong);
})


