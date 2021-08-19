let contentCtaButton = document.querySelector("#ctaButton")

setTimeout(() => {
	document.querySelector(".pageActive.accessPage").classList.add("showLess")
}, 1000)

setTimeout(() => {
	contentCtaButton?.classList.add("showButton")
}, 750)

let timelineButtons = document.querySelectorAll("#timelineButtons > button")

timelineButtons.forEach((button) => {
	button.addEventListener("click", () => {
		timelineButtons.forEach((b) => {
			b.classList.remove("buttonContentActive")
		})
		button.classList.add("buttonContentActive")
	})
})

window.addEventListener("scroll", (ev) => {
	if (window.scrollY > 0) {
		console.log("remover")
        scrollMore.classList.add("scrollMoreHidden")
	} else {
        console.log("colocar")
        scrollMore.classList.remove("scrollMoreHidden")
	}
}, false)
