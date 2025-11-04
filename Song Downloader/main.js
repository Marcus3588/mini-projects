function downloadSong(song) {
	return new Promise((resolve, reject) => {
		if(!song) reject("Please enter a song name ")
			const statusDiv = document.getElementById("status");
		    statusDiv.textContent = `Downloading "${song}"...please wait a while`;

			setTimeout(() => {
				resolve(`"${song}" downloaded! Check your downloads folder.`);
			}, 2000);
	})
}

async function handleDownload() {
	const songInput = document.getElementById("songInput").value.trim();

	try {
		const message = await downloadSong(songInput);
		document.getElementById("status").textContent = message;
	} catch (error) {
		document.getElementById("status").textContent = `${error}`;
	}
}

document.getElementById("downloadBtn").addEventListener("click", handleDownload);