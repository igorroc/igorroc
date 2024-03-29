let isMobile = isMobileDevice()

window.addEventListener("resize", () => {
	isMobile = isMobileDevice()
	try {
		nextPage()
	} catch (error) {}
})

function isMobileDevice() {
	var check = false
	if (window.innerWidth <= 1200) {
		check = true
	}
	return check
}

function activateMobileSwipe(){
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
}
// mobile swipe

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty("--vh", `${vh}px`)

window.addEventListener("resize", () => {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty("--vh", `${vh}px`)
})
