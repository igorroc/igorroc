let header = document.querySelector("header")
let hambMenu = document.querySelector("#hamburguerMenu")
let menu = document.querySelector("#menu")

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

if (isMobile) {
	header.style = "transform: translateY(calc((var(--vh, 1vh) * 98) - 92px));"
} else {
	header.style = "transform: translateY(calc((var(--vh, 1vh) * 100) - 92px));"
}

window.addEventListener("resize", () => {
	if (isMobile) {
		header.style =
			"transform: translateY(calc((var(--vh, 1vh) * 98) - 92px));"
	} else {
		header.style =
			"transform: translateY(calc((var(--vh, 1vh) * 100) - 92px));"
	}
})
