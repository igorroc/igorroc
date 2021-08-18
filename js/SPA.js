let returnButton = document.querySelector("#goBack")
let ripples = document.querySelectorAll(".ripple")

let transitioningPages = false

links.forEach((link) => {
	if (link.classList.contains("card")) {
		link.addEventListener("click", () => {
			if (transitioningPages) {
				return
			}
			transitioningPages = true

			header.classList.add("headerDark")
			header.classList.add("headerTop")

			timeline.classList.add("timelineHidden")
			// scrollMore.classList.remove("scrollMoreHidden")
			returnButton.classList.remove("goBackHidden")

			particles.forEach((particle) =>
				particle.classList.add("hideParticle")
			)
			ripples.forEach((ripple) => ripple.classList.add("hideRipple"))

			link.classList.remove("isClickable")
			link.children[0].classList.remove("parallaxMouse")
			link.children[0].style = ""
			link.parentNode.classList.add("accessPage")

			setTimeout(() => {
				console.log("MUDANDO")
				window.location = `https://igorroc.github.io/igorroc/${
					link.parentNode.id
				}.html?page=${link.parentNode.getAttribute("page")}`
			}, 2000)
		})
	}
})

returnButton?.addEventListener("click", () => {
	if (transitioningPages) {
		return
	}
	transitioningPages = true

	let top = document.querySelector("#top")
	top.scrollIntoView({
		behavior: "smooth",
		block: "start",
		inline: "nearest",
	})

	document.body.style = "overflow: hidden;"
	header.classList.remove("headerDark")
	header.classList.add("headerBottom")

	timeline.classList.remove("timelineHidden")
	scrollMore.classList.add("scrollMoreHidden")
	returnButton.classList.add("goBackHidden")

	particles.forEach((particle) => particle.classList.add("hideParticle"))
	ripples.forEach((ripple) => ripple.classList.add("hideRipple"))

	let wrapperPage = document.querySelector("#wrapperPage")

	wrapperPage.children[0].children[0].classList.remove("parallaxMouse")
	wrapperPage.children[0].children[0].style = ""
	wrapperPage.children[0].classList.toggle("accessPage")

	setTimeout(() => {
		console.log("MUDANDO")
		window.location = `https://igorroc.github.io/igorroc/index.html?page=${page}`
	}, 2000)
})
