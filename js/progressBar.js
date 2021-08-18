let progressBar = document.querySelector("#progressBar")

let totalHeight = document.body.scrollHeight - window.innerHeight

document.body.addEventListener("scroll", () => {
	let progress = (document.body.scrollTop / totalHeight) * 100
	progressBar.style.width = `${progress}%`
})
