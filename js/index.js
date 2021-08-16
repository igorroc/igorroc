let wrapperPages = document.querySelector("#wrapperPages")
let scrollMore = document.querySelector("#scrollMore")
let timeline = document.querySelector("#timeline")
let currentPage = 0
let transitioning = false

document.addEventListener("wheel", (event) => {
	if (!transitioning) {
		transitioning = true

		timeline
			.querySelector(".timelineActive")
			.classList.remove("timelineActive")

		event.deltaY >= 0 ? currentPage++ : currentPage--

		currentPage >= timeline.children.length
			? (currentPage = 0)
			: (currentPage = currentPage)

		currentPage < 0
			? (currentPage = timeline.children.length - 1)
			: (currentPage = currentPage)

		timeline.children[currentPage].classList.add("timelineActive")

		nextPage()
	}

	setTimeout(() => {
		transitioning = false
	}, 2000)
})

function nextPage(){
	wrapperPages.setAttribute("style", `transform: translateY(${-100*currentPage}vh)`)
	if(currentPage == 0){
		scrollMore.classList.remove("scrollMoreHidden")
	}else{
		scrollMore.classList.add("scrollMoreHidden")
	}
}