let root = document.documentElement

let cursor = document.querySelector("#cursor")
let links = document.querySelectorAll("a")
let buttons = document.querySelectorAll("button")

root.style.setProperty("--cursor", "none")
cursor.style.setProperty("display", "block")

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

window.addEventListener("mousedown", () => {
	cursor.classList.add("cursorClick")
	setTimeout(() => {
		cursor.classList.remove("cursorClick")
	}, 200)
})
