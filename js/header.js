let header = document.querySelector("header")
let hambMenu = document.querySelector("#hamburguerMenu")
let menu = document.querySelector("#menu")

window.addEventListener("load", async () => {
	await sleep(1000)

	header = document.querySelector("header")
	hambMenu = document.querySelector("#hamburguerMenu")
	menu = document.querySelector("#menu")

	hambMenu.addEventListener("click", () => {
		hambMenu.classList.toggle("headerMenuActive")
		menu.classList.toggle("menuShow")
	})

	hambMenu.addEventListener("mouseenter", () => {
		cursor.classList.add("cursorOnLink")
	})

	hambMenu.addEventListener("mouseout", () => {
		cursor.classList.remove("cursorOnLink")
	})
})
