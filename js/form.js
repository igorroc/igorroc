var link = document.querySelector("#headerCTA")
let sendEmail = document.querySelector("#sendEmail")

var form = document.querySelector("#formID")
var formClose = document.querySelector("#closeForm")

window.addEventListener("load", async () => {
	await sleep(1000)
	
	form = document.querySelector("#formID")
	formClose = document.querySelector("#closeForm")

	link = document.querySelector("#headerCTA")
	sendEmail = document.querySelector("#sendEmail")

	link.addEventListener("click", () => {
		form.classList.add("formShow")
		menu.classList.remove("menuShow")
		hambMenu.classList.remove("headerMenuActive")
		header.classList.remove("headerDark")
		console.log(link)
		link.classList.add("hideCTA")
	})

	formClose.addEventListener("click", () => {
		console.log("close form")
		form.classList.remove("formShow")
		header.classList.add("headerDark")
		link.classList.remove("hideCTA")
	})

	if (sendEmail) {
		sendEmail.addEventListener("click", () => {
			form.classList.add("formShow")
			menu.classList.remove("menuShow")
			hambMenu.classList.remove("headerMenuActive")
		})
	}
})
