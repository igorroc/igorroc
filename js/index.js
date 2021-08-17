let params = new URL(document.location).searchParams
let page = params.get("page")

let wrapperPages = document.querySelector("#wrapperPages")
let scrollMore = document.querySelector("#scrollMore")
let timeline = document.querySelector("#timeline")

var link = document.querySelector("#headerCTA")
let sendEmail = document.querySelector("#sendEmail")

var form = document.querySelector("#formID")
var formClose = document.querySelector("#closeForm")

let currentPage = page || 0
let transitioning = false
let isMobile = isMobileDevice()

window.scrollTo(0, 0)
nextPage()

document.addEventListener("wheel", (event) => {
	if (!transitioning) {
		transitioning = true

		event.deltaY >= 0 ? currentPage++ : currentPage--

		currentPage >= timeline.children.length
			? (currentPage = 0)
			: (currentPage = currentPage)

		currentPage < 0
			? (currentPage = timeline.children.length - 1)
			: (currentPage = currentPage)

		nextPage()
	}

	setTimeout(() => {
		transitioning = false
	}, 1000)
})

function nextPage() {
	window.history.pushState("", `page ${currentPage}`, `?page=${currentPage}`)

	if (!isMobile) {
		wrapperPages.setAttribute(
			"style",
			`transform: translateY(${-100 * currentPage}vh)`
		)
	} else {
		wrapperPages.setAttribute(
			"style",
			`transform: translateX(${-100 * currentPage}vw)`
		)
	}

	timeline.querySelector(".timelineActive").classList.remove("timelineActive")

	timeline.children[currentPage].classList.add("timelineActive")

	wrapperPages.querySelector(".pageActive")?.classList.remove("pageActive")
	wrapperPages.children[currentPage].classList.add("pageActive")

	if (currentPage == 0) {
		scrollMore.classList.remove("scrollMoreHidden")
	} else {
		scrollMore.classList.add("scrollMoreHidden")
	}
}

document.addEventListener("mousemove", (event) => {
	document.querySelectorAll(".parallaxMouse").forEach((element) => {
		element.style.transform = `rotateY(${
			(event.clientX - document.body.clientWidth / 2) / 30
		}deg) rotateX(${
			(event.clientY - document.body.clientHeight / 2) / 30
		}deg)`
	})
	document.querySelectorAll(".parallaxMouse2d").forEach((element) => {
		element.style.transform = `translateX(${
			event.clientX / 30
		}px) translateY(${event.clientY / 30}px)`
	})
})

window.addEventListener("resize", () => {
	isMobile = isMobileDevice()
	nextPage()
})

// Custom form
link.addEventListener("click", () => {
	form.classList.add("formShow")
	menu.classList.remove("menuShow")
	hambMenu.classList.remove("headerMenuActive")
})
sendEmail.addEventListener("click", () => {
	form.classList.add("formShow")
	menu.classList.remove("menuShow")
	hambMenu.classList.remove("headerMenuActive")
})

formClose.addEventListener("click", () => {
	form.classList.remove("formShow")
})

function isMobileDevice() {
	var check = false
	if (window.innerWidth <= 1200) {
		check = true
	}
	return check
}

// mobile swipe
window.addEventListener("touchstart", handleTouchStart, false)
window.addEventListener("touchmove", handleTouchMove, false)

var xDown = null
var yDown = null

function getTouches(evt) {
	return (
		evt.touches || // browser API
		evt.originalEvent.touches
	) // jQuery
}

function handleTouchStart(evt) {
	const firstTouch = getTouches(evt)[0]
	xDown = firstTouch.clientX
	yDown = firstTouch.clientY
}

function handleTouchMove(evt) {
	if (!xDown || !yDown) {
		return
	}

	var xUp = evt.touches[0].clientX
	var yUp = evt.touches[0].clientY

	var xDiff = xDown - xUp
	var yDiff = yDown - yUp

	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		if (!transitioning) {
			transitioning = true

			if (xDiff > 0) {
				/* right swipe */
				currentPage++
			} else {
				/* left swipe */
				currentPage--
			}

			currentPage >= timeline.children.length
				? (currentPage = 0)
				: (currentPage = currentPage)

			currentPage < 0
				? (currentPage = timeline.children.length - 1)
				: (currentPage = currentPage)

			nextPage()
		}

		setTimeout(() => {
			transitioning = false
		}, 1000)
	}
	/* reset values */
	xDown = null
	yDown = null
}
