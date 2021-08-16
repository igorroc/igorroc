let params = new URL(document.location).searchParams
let page = params.get("page")

let wrapperPages = document.querySelector("#wrapperPages")
let scrollMore = document.querySelector("#scrollMore")
let timeline = document.querySelector("#timeline")

var link = document.querySelector("#headerCTA")
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

	if(!isMobile){
		wrapperPages.setAttribute(
			"style",
			`transform: translateY(${-100 * currentPage}vh)`
		)
	}else{
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
		element.style.transform = `rotateY(${event.clientX / 60}deg) rotateX(${
			event.clientY / 50
		}deg)`
	})
})

window.addEventListener("resize", ()=> {
	isMobile = isMobileDevice()
	nextPage()
})

// Custom form
link.addEventListener("click", () => {
	form.classList.add("formShow")
})

formClose.addEventListener("click", () => {
	form.classList.remove("formShow")
})


function isMobileDevice() {
    var check = false;
    if(window.innerWidth <= 1200){
		check = true;
	}
	console.log(check)
    return check;
};