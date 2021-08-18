let progressBar = document.querySelector("#progressBar")

let totalHeight = document.body.scrollHeight - window.innerHeight

document.body.addEventListener("scroll", () => {
	let progress = (document.body.scrollTop / totalHeight) * 100
	progress = Math.min(100, progress)
	progressBar.style.width = `${progress}%`
})

if (isMobile) {
	progressBar.style = "bottom: calc(100vh - (var(--vh, 1vh) * 100));"
} else {
	// header.style = "transform: translateY(calc((var(--vh, 1vh) * 100) - 92px));"
}

window.addEventListener("resize", () => {
	if (isMobile) {
		// header.style =
		// 	"transform: translateY(calc((var(--vh, 1vh) * 99) - 92px));"
	} else {
		// header.style =
		// 	"transform: translateY(calc((var(--vh, 1vh) * 100) - 92px));"
	}
})