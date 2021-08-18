let contentCtaButton = document.querySelector("#ctaButton")

setTimeout(() => {
	document.querySelector(".pageActive.accessPage").classList.add("showLess")
}, 1000)

setTimeout(() => {
    contentCtaButton?.classList.add("showButton")
}, 750)