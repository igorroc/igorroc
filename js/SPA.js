let returnButton = document.querySelector("#goBack")
let ripples = document.querySelectorAll(".ripple")

let transitioningPages = false

let gitPath = "https://igorroc.github.io/igor"
let localPath = "."

let correctPath = gitPath

links.forEach((link) => {
	let isCard = link.classList.contains("card")
	let isButton = link.classList.contains("showDetailsButton")
	if (isCard || isButton) {
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

			let newUrl
			let card
			let main

			if (isCard) {
				card = link.children[0]
				main = link.parentNode
				newUrl = `${correctPath}/${
					link.parentNode.id
				}.html?page=${link.parentNode.getAttribute("page")}`
			} else {
				card =
					link.parentNode.parentNode.parentNode.querySelector(".card")
						.children[0]
				main = link.parentNode.parentNode.parentNode

				newUrl = `${correctPath}/${
					link.parentNode.parentNode.parentNode.id
				}.html?page=${link.parentNode.parentNode.parentNode.getAttribute(
					"page"
				)}`
			}

			card.classList.remove("parallaxMouse")
			card.style = ""
			card.parentNode.classList.remove("isClickable")
			console.log(card)
			main.classList.add("accessPage")

			setTimeout(() => {
				console.log("MUDANDO")
				window.location = newUrl
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
	wrapperPage.children[0].classList.remove("showLess")

	setTimeout(() => {
		console.log("MUDANDO")
		window.location = `${correctPath}/index.html?page=${page}`
	}, 2000)
})
