let root = document.documentElement

let cursor = document.querySelector("#cursor")

const cursorSize = cursor.offsetWidth

let links = document.querySelectorAll(".isClickable")
let textInputs = document.querySelectorAll(".isTextInput")
let wrapperHiddenTexts = document.querySelectorAll(".wrapperHiddenText")
let isHoveringHiddenText = false

let mouseHold = false

if (isMobile) {
	cursor.classList.add("cursorMobile")
} else {
	root.style.setProperty("cursor", "none")
}

// ! FOLLOW CURSOR
window.addEventListener("mousemove", (event) => {
	cursor.style.left = event.pageX + "px"
	cursor.style.top = event.pageY + "px"
})

// ! CURSOR HOVER EFFECTS
links.forEach((link) => {
	if (link.classList.contains("card")) {
		link = link.querySelector("div > img")
	}
	link.addEventListener("mouseenter", () => {
		cursor.classList.add("cursorOnLink")
	})
	link.addEventListener("mouseout", () => {
		cursor.classList.remove("cursorOnLink")
	})
})
textInputs.forEach((input) => {
	input.addEventListener("mouseenter", () => {
		cursor.classList.add("cursorOnInput")
	})
	input.addEventListener("mouseout", () => {
		cursor.classList.remove("cursorOnInput")
	})
})
wrapperHiddenTexts.forEach((wrapper) => {
	wrapper.addEventListener("mousemove", () => {
		cursor.classList.add("cursorOnHidden")
	})
	wrapper.addEventListener("mouseout", () => {
		cursor.classList.remove("cursorOnHidden")
	})
})

// ! MOUSE CLICK
window.addEventListener("mousedown", () => {
	cursor.classList.add("cursorClick")
})

window.addEventListener("mouseup", () => {
	setTimeout(() => {
		cursor.classList.remove("cursorClick")
	}, 200)
})

// ! REVEAL HIDDEN TEXTS
wrapperHiddenTexts.forEach((wrapperHiddenText) => {
	wrapperHiddenText.addEventListener("mousemove", (e) => {
		isHoveringHiddenText = true
		wrapperHiddenText.style.clipPath = `inset(${
			e.offsetY - cursorSize / 2
		}px ${wrapperHiddenText.offsetWidth - e.offsetX - cursorSize / 2}px ${
			wrapperHiddenText.offsetHeight - e.offsetY - cursorSize / 2
		}px ${e.offsetX - cursorSize / 2}px)`
	})
	wrapperHiddenText.addEventListener("mouseout", () => {
		setTimeout(() => {
			if (!isHoveringHiddenText) {
				wrapperHiddenText.style.clipPath = "inset(0)"
			}
		}, 1000)
		isHoveringHiddenText = false
	})
})
