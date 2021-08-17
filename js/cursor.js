let root = document.documentElement

let cursor = document.querySelector("#cursor")
let links = document.querySelectorAll("a")
let buttons = document.querySelectorAll("button")
let textInputs = document.querySelectorAll("input")
let textAreas = document.querySelectorAll("textarea")
let cards = document.querySelectorAll(".card")

let mouseHold = false

if (isMobile) {
	cursor.classList.add("cursorMobile")
}else{
	root.style.setProperty("cursor", "none")
}

window.addEventListener("mousemove", (event) => {
	cursor.style.left = event.pageX + "px"
	cursor.style.top = event.pageY + "px"
})

links.forEach((link) => {
	link.addEventListener("mouseenter", () => {
		cursor.classList.add("cursorOnLink")
	})
	link.addEventListener("mouseout", () => {
		cursor.classList.remove("cursorOnLink")
	})
})

buttons.forEach((button) => {
	button.addEventListener("mouseenter", () => {
		cursor.classList.add("cursorOnLink")
	})
	button.addEventListener("mouseout", () => {
		cursor.classList.remove("cursorOnLink")
	})
})

cards.forEach((card) => {
	if(card.classList.contains("isClickable")){
		card = card.querySelector("div > img")
		card.addEventListener("mouseenter", () => {
			console.log("enter")
			cursor.classList.add("cursorOnLink")
		})
		card.addEventListener("mouseout", () => {
			console.log("leave")
			cursor.classList.remove("cursorOnLink")
		})
	}
})

textInputs.forEach((input) => {
	input.addEventListener("mouseenter", () => {
		cursor.classList.add("cursorOnInput")
	})
	input.addEventListener("mouseout", () => {
		cursor.classList.remove("cursorOnInput")
	})
})

textAreas.forEach((textArea) => {
	textArea.addEventListener("mouseenter", () => {
		cursor.classList.add("cursorOnInput")
	})
	textArea.addEventListener("mouseout", () => {
		cursor.classList.remove("cursorOnInput")
	})
})

window.addEventListener("mousedown", () => {
	cursor.classList.add("cursorClick")
})

window.addEventListener("mouseup", () => {
	setTimeout(() => {

		cursor.classList.remove("cursorClick")
	}, 200)
})