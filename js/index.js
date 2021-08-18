let wrapperPages = document.querySelector("#wrapperPages")
let scrollMore = document.querySelector("#scrollMore")
let timeline = document.querySelector("#timeline")

let currentPage = page || 0
let transitioning = false

nextPage(page)

document.addEventListener("wheel", (event) => {
	if (!transitioning && !transitioningPages) {
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

function nextPage(first) {
	window.history.pushState("", `page ${currentPage}`, `?page=${currentPage}`)

	if (!timeline.children[currentPage]) {
		currentPage = 0
	}

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

	if (first) {
		console.log("first")
		wrapperPages.classList.add("noTransition")
		setTimeout(() => {
			wrapperPages.classList.remove("noTransition")
			console.log("removed")
		}, 300)
	}

	timeline
		.querySelector(".timelineActive")
		?.classList.remove("timelineActive")

	timeline.children[currentPage].classList.add("timelineActive")

	wrapperPages.querySelector(".pageActive")?.classList.remove("pageActive")
	wrapperPages.children[currentPage].classList.add("pageActive")

	if (currentPage == 0) {
		scrollMore.classList.remove("scrollMoreHidden")
	} else {
		scrollMore.classList.add("scrollMoreHidden")
	}
}

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty("--vh", `${vh}px`)
window.addEventListener("resize", () => {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty("--vh", `${vh}px`)
	console.log(vh)
})
