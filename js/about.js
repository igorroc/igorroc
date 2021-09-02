let timeline = document.querySelectorAll("#timelineButtons > button")
let textRight = document.querySelector("#first-content .contentRight")

timeline.forEach((button) => {
	button.addEventListener("click", () => {
		let link = button.getAttribute("timelink")

		textRight.classList.remove("active-past")
		textRight.classList.remove("active-present")
		textRight.classList.remove("active-future")

		textRight.classList.add(`active-${link}`)
	})
})
