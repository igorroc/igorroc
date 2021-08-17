var link = document.querySelector("#headerCTA")
let sendEmail = document.querySelector("#sendEmail")

var form = document.querySelector("#formID")
var formClose = document.querySelector("#closeForm")

link.addEventListener("click", () => {
	form.classList.add("formShow")
	menu.classList.remove("menuShow")
	hambMenu.classList.remove("headerMenuActive")
})
sendEmail.addEventListener("click", () => {
	form.classList.add("formShow")
	menu.classList.remove("menuShow")
	hambMenu.classList.remove("headerMenuActive")
})

formClose.addEventListener("click", () => {
    console.log("close form")
	form.classList.remove("formShow")
})
