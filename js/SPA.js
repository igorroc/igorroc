let returnButton = document.querySelector("#goBack")
let ripples = document.querySelectorAll(".ripple")

let transitioningPages = false

links.forEach((link) => {
	if (link.classList.contains("card")) {
		link.addEventListener("click", () => {
			transitioningPages = true

			header.classList.add("headerDark")

			timeline.classList.add("timelineHidden")
			scrollMore.classList.remove("scrollMoreHidden")
			returnButton.classList.remove("goBackHidden")

			particles.forEach((particle) =>
				particle.classList.add("hideParticle")
			)
			ripples.forEach((ripple) => ripple.classList.add("hideRipple"))

			link.children[0].classList.remove("parallaxMouse")
			link.children[0].style = ""
			link.parentNode.classList.add("accessPage")

			setTimeout(() => {
				console.log("MUDANDO")
				window.location = `../${
					link.parentNode.id
				}.html?page=${link.parentNode.getAttribute("page")}`
			}, 2000)
		})
	}
})

returnButton?.addEventListener("click", () => {
	window.scroll(0, -200)

	header.classList.remove("headerDark")

	timeline.classList.add("timelineHidden")
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
		window.location = `../index.html?page=${page}`
	}, 2000)
})
